import { AppLanguage } from '../i18n/translations';

export interface Country {
  id: string;
  nameDe: string;
  nameEn: string;
  aliases?: string[];
  lat: number;
  lon: number;
  regionDe: string;
}

const REGION_EN: Record<string, string> = {
  Europa: 'Europe',
  Asien: 'Asia',
  Afrika: 'Africa',
  Nordamerika: 'North America',
  Südamerika: 'South America',
  Ozeanien: 'Oceania',
};

export function getRegionLabel(regionDe: string, lang: AppLanguage): string {
  return lang === 'en' ? REGION_EN[regionDe] ?? regionDe : regionDe;
}

export function getCountryName(country: Country, lang: AppLanguage): string {
  return lang === 'en' ? country.nameEn : country.nameDe;
}

export const COUNTRIES: Country[] = [
  { id: '004', nameDe: 'Afghanistan', nameEn: 'Afghanistan', lat: 33.94, lon: 67.71, regionDe: 'Asien' },
  { id: '818', nameDe: 'Ägypten', nameEn: 'Egypt', aliases: ['Aegypten'], lat: 26.82, lon: 30.8, regionDe: 'Afrika' },
  { id: '008', nameDe: 'Albanien', nameEn: 'Albania', lat: 41.15, lon: 20.17, regionDe: 'Europa' },
  { id: '012', nameDe: 'Algerien', nameEn: 'Algeria', lat: 28.03, lon: 1.66, regionDe: 'Afrika' },
  { id: '024', nameDe: 'Angola', nameEn: 'Angola', lat: -11.2, lon: 17.87, regionDe: 'Afrika' },
  { id: '226', nameDe: 'Äquatorialguinea', nameEn: 'Equatorial Guinea', aliases: ['Aequatorialguinea'], lat: 1.65, lon: 10.27, regionDe: 'Afrika' },
  { id: '032', nameDe: 'Argentinien', nameEn: 'Argentina', lat: -38.42, lon: -63.62, regionDe: 'Südamerika' },
  { id: '051', nameDe: 'Armenien', nameEn: 'Armenia', lat: 40.07, lon: 45.04, regionDe: 'Asien' },
  { id: '031', nameDe: 'Aserbaidschan', nameEn: 'Azerbaijan', lat: 40.14, lon: 47.58, regionDe: 'Asien' },
  { id: '231', nameDe: 'Äthiopien', nameEn: 'Ethiopia', aliases: ['Aethiopien'], lat: 9.15, lon: 40.49, regionDe: 'Afrika' },
  { id: '036', nameDe: 'Australien', nameEn: 'Australia', lat: -25.27, lon: 133.78, regionDe: 'Ozeanien' },
  { id: '044', nameDe: 'Bahamas', nameEn: 'Bahamas', lat: 25.03, lon: -77.4, regionDe: 'Nordamerika' },
  { id: '050', nameDe: 'Bangladesch', nameEn: 'Bangladesh', lat: 23.68, lon: 90.36, regionDe: 'Asien' },
  { id: '056', nameDe: 'Belgien', nameEn: 'Belgium', lat: 50.5, lon: 4.47, regionDe: 'Europa' },
  { id: '084', nameDe: 'Belize', nameEn: 'Belize', lat: 17.19, lon: -88.5, regionDe: 'Nordamerika' },
  { id: '204', nameDe: 'Benin', nameEn: 'Benin', lat: 9.31, lon: 2.32, regionDe: 'Afrika' },
  { id: '064', nameDe: 'Bhutan', nameEn: 'Bhutan', lat: 27.51, lon: 90.43, regionDe: 'Asien' },
  { id: '068', nameDe: 'Bolivien', nameEn: 'Bolivia', lat: -16.29, lon: -63.59, regionDe: 'Südamerika' },
  { id: '070', nameDe: 'Bosnien und Herzegowina', nameEn: 'Bosnia and Herzegovina', aliases: ['Bosnia'], lat: 43.92, lon: 17.68, regionDe: 'Europa' },
  { id: '072', nameDe: 'Botswana', nameEn: 'Botswana', lat: -22.33, lon: 24.68, regionDe: 'Afrika' },
  { id: '076', nameDe: 'Brasilien', nameEn: 'Brazil', aliases: ['Brasil'], lat: -14.24, lon: -51.93, regionDe: 'Südamerika' },
  { id: '096', nameDe: 'Brunei', nameEn: 'Brunei', lat: 4.54, lon: 114.73, regionDe: 'Asien' },
  { id: '100', nameDe: 'Bulgarien', nameEn: 'Bulgaria', lat: 42.73, lon: 25.49, regionDe: 'Europa' },
  { id: '854', nameDe: 'Burkina Faso', nameEn: 'Burkina Faso', lat: 12.24, lon: -1.56, regionDe: 'Afrika' },
  { id: '108', nameDe: 'Burundi', nameEn: 'Burundi', lat: -3.37, lon: 29.92, regionDe: 'Afrika' },
  { id: '152', nameDe: 'Chile', nameEn: 'Chile', lat: -35.68, lon: -71.54, regionDe: 'Südamerika' },
  { id: '156', nameDe: 'China', nameEn: 'China', aliases: ['Volksrepublik China'], lat: 35.86, lon: 104.2, regionDe: 'Asien' },
  { id: '188', nameDe: 'Costa Rica', nameEn: 'Costa Rica', lat: 9.75, lon: -83.75, regionDe: 'Nordamerika' },
  { id: '208', nameDe: 'Dänemark', nameEn: 'Denmark', aliases: ['Daenemark'], lat: 56.26, lon: 9.5, regionDe: 'Europa' },
  { id: '276', nameDe: 'Deutschland', nameEn: 'Germany', aliases: ['BRD'], lat: 51.17, lon: 10.45, regionDe: 'Europa' },
  { id: '214', nameDe: 'Dominikanische Republik', nameEn: 'Dominican Republic', lat: 18.74, lon: -70.16, regionDe: 'Nordamerika' },
  { id: '262', nameDe: 'Dschibuti', nameEn: 'Djibouti', lat: 11.83, lon: 42.59, regionDe: 'Afrika' },
  { id: '218', nameDe: 'Ecuador', nameEn: 'Ecuador', lat: -1.83, lon: -78.18, regionDe: 'Südamerika' },
  { id: '222', nameDe: 'El Salvador', nameEn: 'El Salvador', lat: 13.79, lon: -88.9, regionDe: 'Nordamerika' },
  { id: '384', nameDe: 'Elfenbeinküste', nameEn: 'Ivory Coast', aliases: ["Cote d'Ivoire", "Côte d'Ivoire", 'Elfenbeinkueste'], lat: 7.54, lon: -5.55, regionDe: 'Afrika' },
  { id: '232', nameDe: 'Eritrea', nameEn: 'Eritrea', lat: 15.18, lon: 39.78, regionDe: 'Afrika' },
  { id: '233', nameDe: 'Estland', nameEn: 'Estonia', lat: 58.6, lon: 25.01, regionDe: 'Europa' },
  { id: '748', nameDe: 'Eswatini', nameEn: 'Eswatini', aliases: ['Swaziland', 'Swasiland'], lat: -26.52, lon: 31.47, regionDe: 'Afrika' },
  { id: '242', nameDe: 'Fidschi', nameEn: 'Fiji', lat: -17.71, lon: 178.07, regionDe: 'Ozeanien' },
  { id: '246', nameDe: 'Finnland', nameEn: 'Finland', lat: 61.92, lon: 25.75, regionDe: 'Europa' },
  { id: '250', nameDe: 'Frankreich', nameEn: 'France', lat: 46.23, lon: 2.21, regionDe: 'Europa' },
  { id: '266', nameDe: 'Gabun', nameEn: 'Gabon', lat: -0.8, lon: 11.61, regionDe: 'Afrika' },
  { id: '270', nameDe: 'Gambia', nameEn: 'Gambia', lat: 13.44, lon: -15.31, regionDe: 'Afrika' },
  { id: '268', nameDe: 'Georgien', nameEn: 'Georgia', lat: 42.32, lon: 43.36, regionDe: 'Asien' },
  { id: '288', nameDe: 'Ghana', nameEn: 'Ghana', lat: 7.95, lon: -1.02, regionDe: 'Afrika' },
  { id: '300', nameDe: 'Griechenland', nameEn: 'Greece', lat: 39.07, lon: 21.82, regionDe: 'Europa' },
  { id: '304', nameDe: 'Grönland', nameEn: 'Greenland', aliases: ['Groenland'], lat: 71.71, lon: -42.6, regionDe: 'Nordamerika' },
  { id: '826', nameDe: 'Großbritannien', nameEn: 'United Kingdom', aliases: ['UK', 'England', 'Schottland', 'Scotland', 'Britain', 'Great Britain', 'Grossbritannien', 'Vereinigtes Königreich'], lat: 54.0, lon: -2.5, regionDe: 'Europa' },
  { id: '320', nameDe: 'Guatemala', nameEn: 'Guatemala', lat: 15.78, lon: -90.23, regionDe: 'Nordamerika' },
  { id: '324', nameDe: 'Guinea', nameEn: 'Guinea', lat: 9.95, lon: -9.7, regionDe: 'Afrika' },
  { id: '624', nameDe: 'Guinea-Bissau', nameEn: 'Guinea-Bissau', lat: 11.8, lon: -15.18, regionDe: 'Afrika' },
  { id: '328', nameDe: 'Guyana', nameEn: 'Guyana', lat: 4.86, lon: -58.93, regionDe: 'Südamerika' },
  { id: '332', nameDe: 'Haiti', nameEn: 'Haiti', lat: 18.97, lon: -72.29, regionDe: 'Nordamerika' },
  { id: '340', nameDe: 'Honduras', nameEn: 'Honduras', lat: 15.2, lon: -86.24, regionDe: 'Nordamerika' },
  { id: '356', nameDe: 'Indien', nameEn: 'India', lat: 20.59, lon: 78.96, regionDe: 'Asien' },
  { id: '360', nameDe: 'Indonesien', nameEn: 'Indonesia', lat: -0.79, lon: 113.92, regionDe: 'Asien' },
  { id: '368', nameDe: 'Irak', nameEn: 'Iraq', lat: 33.22, lon: 43.68, regionDe: 'Asien' },
  { id: '364', nameDe: 'Iran', nameEn: 'Iran', aliases: ['Persien', 'Persia'], lat: 32.43, lon: 53.69, regionDe: 'Asien' },
  { id: '372', nameDe: 'Irland', nameEn: 'Ireland', lat: 53.14, lon: -7.69, regionDe: 'Europa' },
  { id: '352', nameDe: 'Island', nameEn: 'Iceland', lat: 64.96, lon: -19.02, regionDe: 'Europa' },
  { id: '376', nameDe: 'Israel', nameEn: 'Israel', lat: 31.05, lon: 34.85, regionDe: 'Asien' },
  { id: '380', nameDe: 'Italien', nameEn: 'Italy', lat: 41.87, lon: 12.57, regionDe: 'Europa' },
  { id: '388', nameDe: 'Jamaika', nameEn: 'Jamaica', lat: 18.11, lon: -77.3, regionDe: 'Nordamerika' },
  { id: '392', nameDe: 'Japan', nameEn: 'Japan', lat: 36.2, lon: 138.25, regionDe: 'Asien' },
  { id: '887', nameDe: 'Jemen', nameEn: 'Yemen', lat: 15.55, lon: 48.52, regionDe: 'Asien' },
  { id: '400', nameDe: 'Jordanien', nameEn: 'Jordan', lat: 30.59, lon: 36.24, regionDe: 'Asien' },
  { id: '116', nameDe: 'Kambodscha', nameEn: 'Cambodia', lat: 12.57, lon: 104.99, regionDe: 'Asien' },
  { id: '120', nameDe: 'Kamerun', nameEn: 'Cameroon', lat: 7.37, lon: 12.35, regionDe: 'Afrika' },
  { id: '124', nameDe: 'Kanada', nameEn: 'Canada', lat: 56.13, lon: -106.35, regionDe: 'Nordamerika' },
  { id: '398', nameDe: 'Kasachstan', nameEn: 'Kazakhstan', lat: 48.02, lon: 66.92, regionDe: 'Asien' },
  { id: '634', nameDe: 'Katar', nameEn: 'Qatar', lat: 25.35, lon: 51.18, regionDe: 'Asien' },
  { id: '404', nameDe: 'Kenia', nameEn: 'Kenya', lat: -0.02, lon: 37.91, regionDe: 'Afrika' },
  { id: '417', nameDe: 'Kirgisistan', nameEn: 'Kyrgyzstan', lat: 41.2, lon: 74.77, regionDe: 'Asien' },
  { id: '170', nameDe: 'Kolumbien', nameEn: 'Colombia', lat: 4.57, lon: -74.3, regionDe: 'Südamerika' },
  { id: '180', nameDe: 'Kongo (Dem. Rep.)', nameEn: 'DR Congo', aliases: ['Democratic Republic of the Congo', 'Demokratische Republik Kongo'], lat: -4.04, lon: 21.76, regionDe: 'Afrika' },
  { id: '178', nameDe: 'Kongo (Republik)', nameEn: 'Republic of the Congo', aliases: ['Congo'], lat: -0.23, lon: 15.83, regionDe: 'Afrika' },
  { id: '408', nameDe: 'Nordkorea', nameEn: 'North Korea', lat: 40.34, lon: 127.51, regionDe: 'Asien' },
  { id: '410', nameDe: 'Südkorea', nameEn: 'South Korea', aliases: ['Korea', 'Suedkorea'], lat: 35.91, lon: 127.77, regionDe: 'Asien' },
  { id: '191', nameDe: 'Kroatien', nameEn: 'Croatia', lat: 45.1, lon: 15.2, regionDe: 'Europa' },
  { id: '192', nameDe: 'Kuba', nameEn: 'Cuba', lat: 21.52, lon: -77.78, regionDe: 'Nordamerika' },
  { id: '414', nameDe: 'Kuwait', nameEn: 'Kuwait', lat: 29.31, lon: 47.48, regionDe: 'Asien' },
  { id: '418', nameDe: 'Laos', nameEn: 'Laos', lat: 19.86, lon: 102.5, regionDe: 'Asien' },
  { id: '426', nameDe: 'Lesotho', nameEn: 'Lesotho', lat: -29.61, lon: 28.23, regionDe: 'Afrika' },
  { id: '428', nameDe: 'Lettland', nameEn: 'Latvia', lat: 56.88, lon: 24.6, regionDe: 'Europa' },
  { id: '422', nameDe: 'Libanon', nameEn: 'Lebanon', lat: 33.85, lon: 35.86, regionDe: 'Asien' },
  { id: '430', nameDe: 'Liberia', nameEn: 'Liberia', lat: 6.43, lon: -9.43, regionDe: 'Afrika' },
  { id: '434', nameDe: 'Libyen', nameEn: 'Libya', lat: 26.34, lon: 17.23, regionDe: 'Afrika' },
  { id: '440', nameDe: 'Litauen', nameEn: 'Lithuania', lat: 55.17, lon: 23.88, regionDe: 'Europa' },
  { id: '442', nameDe: 'Luxemburg', nameEn: 'Luxembourg', lat: 49.82, lon: 6.13, regionDe: 'Europa' },
  { id: '450', nameDe: 'Madagaskar', nameEn: 'Madagascar', lat: -18.77, lon: 46.87, regionDe: 'Afrika' },
  { id: '454', nameDe: 'Malawi', nameEn: 'Malawi', lat: -13.25, lon: 34.3, regionDe: 'Afrika' },
  { id: '458', nameDe: 'Malaysia', nameEn: 'Malaysia', lat: 4.21, lon: 101.98, regionDe: 'Asien' },
  { id: '466', nameDe: 'Mali', nameEn: 'Mali', lat: 17.57, lon: -4.0, regionDe: 'Afrika' },
  { id: '504', nameDe: 'Marokko', nameEn: 'Morocco', lat: 31.79, lon: -7.09, regionDe: 'Afrika' },
  { id: '478', nameDe: 'Mauretanien', nameEn: 'Mauritania', lat: 21.01, lon: -10.94, regionDe: 'Afrika' },
  { id: '484', nameDe: 'Mexiko', nameEn: 'Mexico', lat: 23.63, lon: -102.55, regionDe: 'Nordamerika' },
  { id: '498', nameDe: 'Moldau', nameEn: 'Moldova', aliases: ['Moldawien'], lat: 47.41, lon: 28.37, regionDe: 'Europa' },
  { id: '496', nameDe: 'Mongolei', nameEn: 'Mongolia', lat: 46.86, lon: 103.85, regionDe: 'Asien' },
  { id: '499', nameDe: 'Montenegro', nameEn: 'Montenegro', lat: 42.71, lon: 19.37, regionDe: 'Europa' },
  { id: '508', nameDe: 'Mosambik', nameEn: 'Mozambique', lat: -18.67, lon: 35.53, regionDe: 'Afrika' },
  { id: '104', nameDe: 'Myanmar', nameEn: 'Myanmar', aliases: ['Burma', 'Birma'], lat: 21.92, lon: 95.96, regionDe: 'Asien' },
  { id: '516', nameDe: 'Namibia', nameEn: 'Namibia', lat: -22.96, lon: 18.49, regionDe: 'Afrika' },
  { id: '524', nameDe: 'Nepal', nameEn: 'Nepal', lat: 28.39, lon: 84.12, regionDe: 'Asien' },
  { id: '554', nameDe: 'Neuseeland', nameEn: 'New Zealand', lat: -40.9, lon: 174.89, regionDe: 'Ozeanien' },
  { id: '558', nameDe: 'Nicaragua', nameEn: 'Nicaragua', lat: 12.87, lon: -85.21, regionDe: 'Nordamerika' },
  { id: '528', nameDe: 'Niederlande', nameEn: 'Netherlands', aliases: ['Holland', 'The Netherlands'], lat: 52.13, lon: 5.29, regionDe: 'Europa' },
  { id: '562', nameDe: 'Niger', nameEn: 'Niger', lat: 17.61, lon: 8.08, regionDe: 'Afrika' },
  { id: '566', nameDe: 'Nigeria', nameEn: 'Nigeria', lat: 9.08, lon: 8.68, regionDe: 'Afrika' },
  { id: '807', nameDe: 'Nordmazedonien', nameEn: 'North Macedonia', aliases: ['Mazedonien', 'Macedonia'], lat: 41.61, lon: 21.75, regionDe: 'Europa' },
  { id: '578', nameDe: 'Norwegen', nameEn: 'Norway', lat: 60.47, lon: 8.47, regionDe: 'Europa' },
  { id: '512', nameDe: 'Oman', nameEn: 'Oman', lat: 21.47, lon: 55.98, regionDe: 'Asien' },
  { id: '040', nameDe: 'Österreich', nameEn: 'Austria', aliases: ['Oesterreich'], lat: 47.52, lon: 14.55, regionDe: 'Europa' },
  { id: '626', nameDe: 'Osttimor', nameEn: 'Timor-Leste', aliases: ['East Timor'], lat: -8.87, lon: 125.73, regionDe: 'Asien' },
  { id: '586', nameDe: 'Pakistan', nameEn: 'Pakistan', lat: 30.38, lon: 69.35, regionDe: 'Asien' },
  { id: '275', nameDe: 'Palästina', nameEn: 'Palestine', aliases: ['Palaestina'], lat: 31.95, lon: 35.23, regionDe: 'Asien' },
  { id: '591', nameDe: 'Panama', nameEn: 'Panama', lat: 8.54, lon: -80.78, regionDe: 'Nordamerika' },
  { id: '598', nameDe: 'Papua-Neuguinea', nameEn: 'Papua New Guinea', lat: -6.31, lon: 143.96, regionDe: 'Ozeanien' },
  { id: '600', nameDe: 'Paraguay', nameEn: 'Paraguay', lat: -23.44, lon: -58.44, regionDe: 'Südamerika' },
  { id: '604', nameDe: 'Peru', nameEn: 'Peru', lat: -9.19, lon: -75.02, regionDe: 'Südamerika' },
  { id: '608', nameDe: 'Philippinen', nameEn: 'Philippines', lat: 12.88, lon: 121.77, regionDe: 'Asien' },
  { id: '616', nameDe: 'Polen', nameEn: 'Poland', lat: 51.92, lon: 19.15, regionDe: 'Europa' },
  { id: '620', nameDe: 'Portugal', nameEn: 'Portugal', lat: 39.4, lon: -8.22, regionDe: 'Europa' },
  { id: '646', nameDe: 'Ruanda', nameEn: 'Rwanda', lat: -1.94, lon: 29.87, regionDe: 'Afrika' },
  { id: '642', nameDe: 'Rumänien', nameEn: 'Romania', aliases: ['Rumaenien'], lat: 45.94, lon: 24.97, regionDe: 'Europa' },
  { id: '643', nameDe: 'Russland', nameEn: 'Russia', lat: 61.52, lon: 105.32, regionDe: 'Europa/Asien' },
  { id: '894', nameDe: 'Sambia', nameEn: 'Zambia', lat: -13.13, lon: 27.85, regionDe: 'Afrika' },
  { id: '682', nameDe: 'Saudi-Arabien', nameEn: 'Saudi Arabia', lat: 23.89, lon: 45.08, regionDe: 'Asien' },
  { id: '752', nameDe: 'Schweden', nameEn: 'Sweden', lat: 60.13, lon: 18.64, regionDe: 'Europa' },
  { id: '756', nameDe: 'Schweiz', nameEn: 'Switzerland', aliases: ['Die Schweiz'], lat: 46.82, lon: 8.23, regionDe: 'Europa' },
  { id: '686', nameDe: 'Senegal', nameEn: 'Senegal', lat: 14.5, lon: -14.45, regionDe: 'Afrika' },
  { id: '688', nameDe: 'Serbien', nameEn: 'Serbia', lat: 44.02, lon: 21.01, regionDe: 'Europa' },
  { id: '694', nameDe: 'Sierra Leone', nameEn: 'Sierra Leone', lat: 8.46, lon: -11.78, regionDe: 'Afrika' },
  { id: '716', nameDe: 'Simbabwe', nameEn: 'Zimbabwe', lat: -19.02, lon: 29.15, regionDe: 'Afrika' },
  { id: '702', nameDe: 'Singapur', nameEn: 'Singapore', lat: 1.35, lon: 103.82, regionDe: 'Asien' },
  { id: '703', nameDe: 'Slowakei', nameEn: 'Slovakia', lat: 48.67, lon: 19.7, regionDe: 'Europa' },
  { id: '705', nameDe: 'Slowenien', nameEn: 'Slovenia', lat: 46.15, lon: 14.99, regionDe: 'Europa' },
  { id: '706', nameDe: 'Somalia', nameEn: 'Somalia', lat: 5.15, lon: 46.2, regionDe: 'Afrika' },
  { id: '724', nameDe: 'Spanien', nameEn: 'Spain', lat: 40.46, lon: -3.75, regionDe: 'Europa' },
  { id: '144', nameDe: 'Sri Lanka', nameEn: 'Sri Lanka', aliases: ['Ceylon'], lat: 7.87, lon: 80.77, regionDe: 'Asien' },
  { id: '710', nameDe: 'Südafrika', nameEn: 'South Africa', aliases: ['Suedafrika'], lat: -30.56, lon: 22.94, regionDe: 'Afrika' },
  { id: '729', nameDe: 'Sudan', nameEn: 'Sudan', lat: 12.86, lon: 30.22, regionDe: 'Afrika' },
  { id: '728', nameDe: 'Südsudan', nameEn: 'South Sudan', aliases: ['Suedsudan'], lat: 6.88, lon: 31.31, regionDe: 'Afrika' },
  { id: '740', nameDe: 'Suriname', nameEn: 'Suriname', lat: 3.92, lon: -56.03, regionDe: 'Südamerika' },
  { id: '760', nameDe: 'Syrien', nameEn: 'Syria', lat: 34.8, lon: 38.99, regionDe: 'Asien' },
  { id: '762', nameDe: 'Tadschikistan', nameEn: 'Tajikistan', lat: 38.86, lon: 71.28, regionDe: 'Asien' },
  { id: '158', nameDe: 'Taiwan', nameEn: 'Taiwan', lat: 23.7, lon: 120.96, regionDe: 'Asien' },
  { id: '834', nameDe: 'Tansania', nameEn: 'Tanzania', lat: -6.37, lon: 34.89, regionDe: 'Afrika' },
  { id: '764', nameDe: 'Thailand', nameEn: 'Thailand', aliases: ['Siam'], lat: 15.87, lon: 100.99, regionDe: 'Asien' },
  { id: '768', nameDe: 'Togo', nameEn: 'Togo', lat: 8.62, lon: 0.82, regionDe: 'Afrika' },
  { id: '780', nameDe: 'Trinidad und Tobago', nameEn: 'Trinidad and Tobago', lat: 10.69, lon: -61.22, regionDe: 'Nordamerika' },
  { id: '148', nameDe: 'Tschad', nameEn: 'Chad', lat: 15.45, lon: 18.73, regionDe: 'Afrika' },
  { id: '203', nameDe: 'Tschechien', nameEn: 'Czechia', aliases: ['Czech Republic', 'Tschechische Republik', 'Böhmen'], lat: 49.82, lon: 15.47, regionDe: 'Europa' },
  { id: '788', nameDe: 'Tunesien', nameEn: 'Tunisia', lat: 33.89, lon: 9.54, regionDe: 'Afrika' },
  { id: '792', nameDe: 'Türkei', nameEn: 'Turkey', aliases: ['Tuerkei', 'Türkiye'], lat: 38.96, lon: 35.24, regionDe: 'Asien/Europa' },
  { id: '795', nameDe: 'Turkmenistan', nameEn: 'Turkmenistan', lat: 38.97, lon: 59.56, regionDe: 'Asien' },
  { id: '800', nameDe: 'Uganda', nameEn: 'Uganda', lat: 1.37, lon: 32.29, regionDe: 'Afrika' },
  { id: '804', nameDe: 'Ukraine', nameEn: 'Ukraine', lat: 48.38, lon: 31.17, regionDe: 'Europa' },
  { id: '348', nameDe: 'Ungarn', nameEn: 'Hungary', lat: 47.16, lon: 19.5, regionDe: 'Europa' },
  { id: '858', nameDe: 'Uruguay', nameEn: 'Uruguay', lat: -32.52, lon: -55.77, regionDe: 'Südamerika' },
  { id: '860', nameDe: 'Usbekistan', nameEn: 'Uzbekistan', lat: 41.38, lon: 64.59, regionDe: 'Asien' },
  { id: '862', nameDe: 'Venezuela', nameEn: 'Venezuela', lat: 6.42, lon: -66.59, regionDe: 'Südamerika' },
  { id: '784', nameDe: 'Vereinigte Arabische Emirate', nameEn: 'United Arab Emirates', aliases: ['VAE', 'UAE', 'Emirate'], lat: 23.42, lon: 53.85, regionDe: 'Asien' },
  { id: '840', nameDe: 'Vereinigte Staaten', nameEn: 'United States', aliases: ['USA', 'US', 'United States of America', 'Amerika', 'America'], lat: 39.83, lon: -98.58, regionDe: 'Nordamerika' },
  { id: '704', nameDe: 'Vietnam', nameEn: 'Vietnam', lat: 14.06, lon: 108.28, regionDe: 'Asien' },
  { id: '112', nameDe: 'Belarus', nameEn: 'Belarus', aliases: ['Weißrussland', 'Weissrussland'], lat: 53.71, lon: 27.95, regionDe: 'Europa' },
  { id: '140', nameDe: 'Zentralafrikanische Republik', nameEn: 'Central African Republic', lat: 6.61, lon: 20.94, regionDe: 'Afrika' },
  { id: '196', nameDe: 'Zypern', nameEn: 'Cyprus', lat: 35.13, lon: 33.43, regionDe: 'Europa' },
];

export const COUNTRY_BY_ID = new Map<string, Country>(COUNTRIES.map((c) => [c.id, c]));

export function normalizeSearchText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export interface SearchResult {
  detectedLanguage: 'de' | 'en';
  results: Array<{
    country: Country;
    displayLabel: string;
    secondaryLabel: string;
  }>;
}

export function searchCountries(
  query: string,
  excludeIds: Set<string>,
  preferredLang: AppLanguage = 'de'
): SearchResult {
  const qRaw = query.trim().toLowerCase();
  const qNorm = normalizeSearchText(query);

  if (!qNorm) {
    return {
      detectedLanguage: preferredLang,
      results: COUNTRIES.filter((c) => !excludeIds.has(c.id))
        .slice(0, 10)
        .map((c) => ({
          country: c,
          displayLabel: getCountryName(c, preferredLang),
          secondaryLabel: getRegionLabel(c.regionDe, preferredLang),
        })),
    };
  }

  let enAdvantageScore = 0;
  let deAdvantageScore = 0;

  interface ScoredCountry {
    country: Country;
    enScore: number;
    deScore: number;
    aliasScore: number;
    bestScore: number;
  }

  const scored: ScoredCountry[] = [];

  for (const country of COUNTRIES) {
    if (excludeIds.has(country.id)) continue;

    const deNorm = normalizeSearchText(country.nameDe);
    const enNorm = normalizeSearchText(country.nameEn);
    const deLower = country.nameDe.toLowerCase();
    const enLower = country.nameEn.toLowerCase();

    let deScore = 0;
    if (deNorm === qNorm || deLower === qRaw) deScore = 100;
    else if (deNorm.startsWith(qNorm) || deLower.startsWith(qRaw)) deScore = 80;
    else if (deNorm.includes(qNorm) || deLower.includes(qRaw)) deScore = 50;

    let enScore = 0;
    if (enNorm === qNorm || enLower === qRaw) enScore = 100;
    else if (enNorm.startsWith(qNorm) || enLower.startsWith(qRaw)) enScore = 80;
    else if (enNorm.includes(qNorm) || enLower.includes(qRaw)) enScore = 50;

    let aliasScore = 0;
    if (country.aliases) {
      for (const alias of country.aliases) {
        const alNorm = normalizeSearchText(alias);
        if (alNorm === qNorm) aliasScore = Math.max(aliasScore, 95);
        else if (alNorm.startsWith(qNorm)) aliasScore = Math.max(aliasScore, 75);
        else if (alNorm.includes(qNorm)) aliasScore = Math.max(aliasScore, 45);
      }
    }

    const bestScore = Math.max(deScore, enScore, aliasScore);
    if (bestScore > 0) {
      scored.push({ country, enScore, deScore, aliasScore, bestScore });
      if (enScore > deScore) enAdvantageScore += enScore - deScore;
      if (deScore > enScore) deAdvantageScore += deScore - enScore;
    }
  }

  const hasGermanChars = /[äöüß]/i.test(query);
  const detectedLanguage: 'de' | 'en' = hasGermanChars
    ? 'de'
    : enAdvantageScore > deAdvantageScore
    ? 'en'
    : deAdvantageScore > enAdvantageScore
    ? 'de'
    : preferredLang;

  scored.sort((a, b) => {
    const primaryA =
      detectedLanguage === 'en' ? Math.max(a.enScore, a.aliasScore) : Math.max(a.deScore, a.aliasScore);
    const primaryB =
      detectedLanguage === 'en' ? Math.max(b.enScore, b.aliasScore) : Math.max(b.deScore, b.aliasScore);
    if (primaryB !== primaryA) return primaryB - primaryA;
    if (b.bestScore !== a.bestScore) return b.bestScore - a.bestScore;
    return detectedLanguage === 'en'
      ? a.country.nameEn.localeCompare(b.country.nameEn, 'en')
      : a.country.nameDe.localeCompare(b.country.nameDe, 'de');
  });

  return {
    detectedLanguage,
    results: scored.slice(0, 12).map((item) => ({
      country: item.country,
      displayLabel: detectedLanguage === 'en' ? item.country.nameEn : item.country.nameDe,
      secondaryLabel:
        preferredLang === 'en'
          ? detectedLanguage === 'de'
            ? item.country.nameEn
            : getRegionLabel(item.country.regionDe, 'en')
          : detectedLanguage === 'en'
          ? item.country.nameDe
          : item.country.regionDe,
    })),
  };
}

const EARTH_RADIUS_KM = 6371;

function toRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function toDeg(rad: number): number {
  return (rad * 180) / Math.PI;
}

export function haversineDistanceKm(from: Country, to: Country): number {
  if (from.id === to.id) return 0;
  const dLat = toRad(to.lat - from.lat);
  const dLon = toRad(to.lon - from.lon);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(EARTH_RADIUS_KM * c);
}

export function bearingDegrees(from: Country, to: Country): number {
  if (from.id === to.id) return 0;
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);
  const dLon = toRad(to.lon - from.lon);

  const y = Math.sin(dLon) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
  const brng = toDeg(Math.atan2(y, x));
  return (brng + 360) % 360;
}

export function bearingCardinalDe(deg: number, lang: AppLanguage = 'de'): string {
  const dirs =
    lang === 'en'
      ? ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
      : ['N', 'NO', 'O', 'SO', 'S', 'SW', 'W', 'NW'];
  const idx = Math.round(deg / 45) % 8;
  return dirs[idx];
}

/**
 * Exact color mapping requested:
 * - 0 km (exact hit): rich Emerald Green (#16A34A)
 * - < 10.000 km: Orange gradient from bright light orange (close) to deep dark orange (far)
 * - >= 10.000 km: Vivid Crimson Red (#DC2626)
 */
export function getDistanceHeatColor(distanceKm: number, isCorrect: boolean): string {
  if (isCorrect || distanceKm === 0) {
    return '#16A34A';
  }
  if (distanceKm >= 10000) {
    return '#DC2626';
  }
  const t = Math.min(1, Math.max(0, distanceKm / 9999));
  // Close (t -> 0): bright light orange hsl(34, 96%, 68%) (#FDBE68)
  // Far (t -> 1): deep dark burnt orange hsl(14, 88%, 32%) (#9A2E0A)
  const hue = Math.round(34 - t * 20);
  const sat = Math.round(96 - t * 8);
  const light = Math.round(68 - t * 36);
  return `hsl(${hue}, ${sat}%, ${light}%)`;
}

export function getDistanceQualityLabel(
  distanceKm: number,
  isCorrect: boolean,
  lang: AppLanguage = 'de'
): string {
  if (lang === 'en') {
    if (isCorrect || distanceKm === 0) return 'Exact Match';
    if (distanceKm < 1200) return 'Very Close';
    if (distanceKm < 3500) return 'Close';
    if (distanceKm < 7000) return 'Medium';
    if (distanceKm < 10000) return 'Far Away';
    return 'Very Far (≥10,000 km)';
  }
  if (isCorrect || distanceKm === 0) return 'Treffer';
  if (distanceKm < 1200) return 'Sehr nah';
  if (distanceKm < 3500) return 'Nah dran';
  if (distanceKm < 7000) return 'Mittel';
  if (distanceKm < 10000) return 'Weit weg';
  return 'Ganz schlecht (≥10.000 km)';
}
