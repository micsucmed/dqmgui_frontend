import { CustomizeProps } from "../containers/display/interfaces";

export interface ParametersForApi {
  overlaidSeparately?: OverlaidSeparatelyProps
  customizeProps?: CustomizeProps,
  run_number: string;
  dataset_name: string;
  folders_path: string;
  plot_name: string
  size: string;
  height: number;
  width: number;
  jsroot: boolean;
  lumi: number
}

export interface PlotProperties {
  folders_path: string;
  plot_name: string;
  label: string;
}

export interface OverlaidSeparatelyProps {
  plots: PlotProperties[],
  ref: string,
  normalize: boolean,
  stats: boolean,
  error: boolean,
}

export interface QueryProperties {
  run_number: string;
  dataset_name: string;
  folder_path: string;
  overlayPlots: string;
  overlayPosition: string;
  normalize: string;
  stats: string;
  error: string;
}
