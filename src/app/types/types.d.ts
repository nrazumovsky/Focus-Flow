declare module "*.css" {
  const styles: { [key: string]: string };
  export = styles;
}
declare module "*.svg" {
  const svg: any;
  export = svg;
}
declare module "*.jpeg";
declare module "*.png";
