import yargs from 'yargs'
import fsExtra from 'fs-extra'
import inquirer from 'inquirer'
import path from 'path'
import chalk from 'chalk'
import { getPackageRoot } from './util/package-info'

export const createClub = async (argv: yargs.Argv<{}>) => {
  console.log(chalk.cyan('Welcome to Clubs!'))
  console.log(chalk.cyan('Test update'))

  const packageRoot = getPackageRoot()
  console.log('package root is: ', packageRoot)

  let responses: {
    projectRoot: string
    shouldAddGitIgnore: boolean
  }

  try {
    responses = await inquirer.prompt<typeof responses>([
      {
        name: 'projectRoot',
        type: 'input',
        default: process.cwd(),
        message: 'Club project root:',
      },
    ])
  } catch (e) {
    if (e === '') {
      return
    }

    throw e
  }

  const projectRoot = responses.projectRoot

  await fsExtra.ensureDir(projectRoot)

  await fsExtra.copy(
    path.join(packageRoot, 'packages', 'clubs-template-astro-standard'),
    projectRoot
  )
}
