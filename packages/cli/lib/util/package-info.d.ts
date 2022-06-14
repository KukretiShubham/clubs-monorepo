export declare function getMonoRepoPackageJsonPath(): string
export declare function getPackageRoot(): string
export interface PackageJson {
  name: string
  version: string
  engines: {
    node: string
  }
}
export declare function findMonoRepoPackageJson(): string | undefined
export declare function getPackageJson(): Promise<PackageJson>
export declare function getHardhatVersion(): string | null
