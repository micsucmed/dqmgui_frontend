import { InfoProps } from '../containers/display/interfaces';

export const seperateRunAndLumiInSearch = (runAndLumi: string) => {
  const runAndLumiArray = runAndLumi.split(':');
  const parsedRun = runAndLumiArray[0];
  const parsedLumi = runAndLumiArray[1] ? parseInt(runAndLumiArray[1]) : 0;

  return { parsedRun, parsedLumi };
};

export const get_label = (info: InfoProps, data?: any) => {
  const value = data ? data.fString : null;

  if (info?.type && info.type === 'time' && value) {
    const milisec = new Date(parseInt(value) * 1000);
    const time = milisec.toUTCString();
    return time;
  } else {
    return value ? value : 'No information';
  }
};

export const getPathName = () => {
  const isBrowser = () => typeof window !== 'undefined';
  let pathName = (isBrowser() && window.location.pathname) || '/';
  const the_lats_char = pathName.charAt(pathName.length-1);
  if(the_lats_char !== '/'){
    pathName = pathName + '/'
  }
  return pathName;
};

export const makeid = () => {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
