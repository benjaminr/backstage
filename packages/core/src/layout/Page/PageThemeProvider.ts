/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export type Gradient = {
  colors: string[];
};

export type PageTheme = {
  gradient: Gradient;
};

export const gradients: Record<string, Gradient> = {
  darkGrey: {
    colors: ['#181818', '#404040', '#757575'],
  },
  marineBlue: {
    colors: ['#00759A', '#004EAC', '#BDDBFF'],
  },
  veryBlue: {
    colors: ['#0B2B9C', '#311288', '#8960FD'],
  },
  rubyRed: {
    colors: ['#A4284B', '#8D1134', '#FFBFF5'],
  },
  toastyOrange: {
    colors: ['#CC3707', '#9A2500', '#FFE175'],
  },
  purpleSky: {
    colors: ['#AF29F8', '#4100F4', '#AF29F8'],
  },
  eveningSea: {
    colors: ['#00FFF2', '#035355'],
  },
  teal: {
    colors: ['#005E4D', '#1F8A77', '#9BF0E1'],
  },
};

export const pageTheme: Record<string, PageTheme> = {
  home: {
    gradient: gradients.teal,
  },
  documentation: {
    gradient: gradients.eveningSea,
  },
  tool: {
    gradient: gradients.purpleSky,
  },
  service: {
    gradient: gradients.marineBlue,
  },
  website: {
    gradient: gradients.veryBlue,
  },
  library: {
    gradient: gradients.rubyRed,
  },
  other: {
    gradient: gradients.darkGrey,
  },
  app: {
    gradient: gradients.toastyOrange,
  },
};
