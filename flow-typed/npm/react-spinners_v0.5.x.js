// flow-typed signature: 1234567890
// flow-typed version: 12345/react-spinners_v0.5.x/flow_>=v0.102.x

declare module "react-spinners" {
  declare type PrecompiledCss = {
    name: string,
    styles: string
  }

  declare type Common = {
    loading?: boolean,
    color?: string,
    css?: string | PrecompiledCss
  }

  declare type Size = {
    size?: number,
    sizeUnit?: string
  }

  declare type HeightWidth = {
    width?: number,
    widthUnit?: string,
    height?: number,
    heightUnit?: string
  }

  declare export type SizeProps = Common & Size;

  declare export type SizeMarginProps = SizeProps & {
    margin?: string
  }

  declare export type HeightWidthProps = Common & HeightWidth;

  declare export type HeightWidthRadiusProps = HeightWidthProps & {
    radius?: number,
    radiusUnit?: string,
    margin?: string
  }

  declare export class CircleLoader extends React$Component<SizeProps> {}
  declare export class ClipLoader extends React$Component<SizeProps> {}
  declare export class PulseLoader extends React$Component<SizeMarginProps> {}
}
