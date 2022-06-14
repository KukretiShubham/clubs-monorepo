import findup from 'find-up'
import fsExtra from 'fs-extra'
import path from 'path'

export function getMonoRepoPackageJsonPath(): string {
  return findMonoRepoPackageJson()!
}

export function getPackageRoot(): string {
  const packageJsonPath = getMonoRepoPackageJsonPath()

  return path.dirname(packageJsonPath)
}

export interface PackageJson {
  name: string
  version: string
  engines: {
    node: string
  }
}

export function findMonoRepoPackageJson() {
  // console.log('file is: ', file)
  return findup.sync('package.json', { cwd: '../../' })
  // return findup.sync('package.json', { cwd: path.dirname(file) })
}

export async function getPackageJson(): Promise<PackageJson> {
  const root = getPackageRoot()
  return fsExtra.readJSON(path.join(root, 'package.json'))
}

export function getHardhatVersion(): string | null {
  const packageJsonPath = findMonoRepoPackageJson()

  if (!packageJsonPath) {
    return null
  }

  try {
    const packageJson = fsExtra.readJsonSync(packageJsonPath)
    return packageJson.version
  } catch {
    return null
  }
}
