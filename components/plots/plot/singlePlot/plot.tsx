import React from 'react';

import { root_url } from '../../../../config/config';
import { get_plot_url } from '../../../../config/config';
import {
  ParamsForApiProps,
  PlotDataProps,
  QueryProps,
} from '../../../../containers/display/interfaces';
import {
  StyledCol,
  StyledPlotRow,
  PlotNameCol,
  Column,
  PlusIcon,
  MinusIcon,
} from '../../../../containers/display/styledComponents';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { removePlotFromSelectedPlots, addToSelectedPlots } from './utils';

interface PlotProps {
  plot: PlotDataProps;
  params_for_api: ParamsForApiProps;
  isPlotSelected: boolean;
}

export const Plot = ({ plot, params_for_api, isPlotSelected }: PlotProps) => {
  params_for_api.plot_name = plot.name;
  const plot_url = get_plot_url(params_for_api);
  const source = `${root_url}/${plot_url}`;

  const router = useRouter();
  const query: QueryProps = router.query;

  return (
    <StyledCol space={2}>
      <StyledPlotRow
        minheight={params_for_api.height}
        width={params_for_api.width}
        is_plot_selected={isPlotSelected.toString()}
      >
        <PlotNameCol>{plot.name}</PlotNameCol>
        <Column>
          {isPlotSelected ? (
            <Link
              href={{
                pathname: '/',
                query: {
                  run_number: query.run_number,
                  dataset_name: query.dataset_name,
                  folder_path: query.folder_path,
                  overlay: query.overlay,
                  overlay_data: query.overlay_data,
                  selected_plots: `${removePlotFromSelectedPlots(
                    query.selected_plots,
                    plot
                  )}`,
                },
              }}
            >
              <MinusIcon />
            </Link>
          ) : (
            <Link
              href={{
                pathname: '/',
                query: {
                  run_number: query.run_number,
                  dataset_name: query.dataset_name,
                  folder_path: query.folder_path,
                  overlay: query.overlay,
                  overlay_data: query.overlay_data,
                  //addig selected plots name and directories to url
                  selected_plots: `${addToSelectedPlots(
                    query.selected_plots,
                    plot
                  )}`,
                },
              }}
            >
              <PlusIcon />
            </Link>
          )}
        </Column>
        <Link
          href={{
            pathname: '/',
            query: {
              run_number: query.run_number,
              dataset_name: query.dataset_name,
              folder_path: query.folder_path,
              overlay: query.overlay,
              overlay_data: query.overlay_data,
              //if plot is laready selected, on plot click, plot will be removed from url;
              //Otherwis-- plot and its dir will be added to url.
              selected_plots: `${
                isPlotSelected
                  ? removePlotFromSelectedPlots(query.selected_plots, plot)
                  : addToSelectedPlots(query.selected_plots, plot)
              }`,
            },
          }}
        >
          <div>
            <img alt={plot.name} src={source} />
          </div>
        </Link>
      </StyledPlotRow>
    </StyledCol>
  );
};
