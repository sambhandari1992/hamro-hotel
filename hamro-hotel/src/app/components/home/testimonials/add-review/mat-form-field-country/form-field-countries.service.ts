import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from './form-field-countries.interface'; 


@Injectable({
  providedIn: 'root'
})
export class FormFieldCountriesService {
  private countriesUrl = '/assets/json/form-field-countries.json';

  constructor(private http: HttpClient) { }

  getCountriesNameAndSvgData(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countriesUrl)
      .pipe(
        catchError((error: any) => {
          console.error('Error fetching reviews:', error);
          throw new Error('Unable to fetch reviews. Please try again later.');
        })
      );
  }
}


// country: Country[] = [
//     {
//         id: 1,
//         name: 'Afghanistan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg',
//     },
//     {
//         id: 2,
//         name: 'Albania',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg',
//     },
//     {
//         id: 3,
//         name: 'Algeria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg',
//     },
//     {
//         id: 4,
//         name: 'Andorra',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg',
//     },
//     {
//         id: 5,
//         name: 'Angola',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg',
//     },
//     {
//         id: 6,
//         name: 'Antigua and Barbuda',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg',
//     },
//     {
//         id: 7,
//         name: 'Argentina',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
//     },
//     {
//         id: 8,
//         name: 'Armenia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg',
//     },
//     {
//         id: 9,
//         name: 'Australia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg',
//     },
//     {
//         id: 10,
//         name: 'Austria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg',
//     },
//     {
//         id: 11,
//         name: 'Azerbaijan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg',
//     },
//     {
//         id: 12,
//         name: 'Bahamas',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg',
//     },
//     {
//         id: 13,
//         name: 'Bahrain',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg',
//     },
//     {
//         id: 14,
//         name: 'Bangladesh',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg',
//     },
//     {
//         id: 15,
//         name: 'Barbados',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg',
//     },
//     {
//         id: 16,
//         name: 'Belarus',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg',
//     },
//     {
//         id: 17,
//         name: 'Belgium',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg',
//     },
//     {
//         id: 18,
//         name: 'Belize',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg',
//     },
//     {
//         id: 19,
//         name: 'Benin',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg',
//     },
//     {
//         id: 20,
//         name: 'Bhutan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg',
//     },
//     {
//         id: 21,
//         name: 'Bolivia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg',
//     },
//     {
//         id: 22,
//         name: 'Bosnia and Herzegovina',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg',
//     },
//     {
//         id: 23,
//         name: 'Botswana',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg',
//     },
//     {
//         id: 24,
//         name: 'Brazil',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
//     },
//     {
//         id: 25,
//         name: 'Brunei',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg',
//     },
//     {
//         id: 26,
//         name: 'Bulgaria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg',
//     },
//     {
//         id: 27,
//         name: 'Burkina Faso',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg',
//     },
//     {
//         id: 28,
//         name: 'Burundi',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg',
//     },
//     {
//         id: 29,
//         name: 'Cabo Verde',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg',
//     },
//     {
//         id: 30,
//         name: 'Cambodia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg',
//     },
//     {
//         id: 31,
//         name: 'Cameroon',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg',
//     },
//     {
//         id: 32,
//         name: 'Canada',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
//     },
//     {
//         id: 33,
//         name: 'Central African Republic',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg',
//     },
//     {
//         id: 34,
//         name: 'Chad',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg',
//     },
//     {
//         id: 35,
//         name: 'Chile',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg',
//     },
//     {
//         id: 36,
//         name: 'China',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
//     },
//     {
//         id: 37,
//         name: 'Colombia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg',
//     },
//     {
//         id: 38,
//         name: 'Comoros',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg',
//     },
//     {
//         id: 39,
//         name: 'Congo (Congo-Brazzaville)',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg',
//     },
//     {
//         id: 40,
//         name: 'Costa Rica',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Costa_Rica_%28state%29.svg',
//     },
//     {
//         id: 41,
//         name: 'Croatia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg',
//     },
//     {
//         id: 42,
//         name: 'Cuba',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg',
//     },
//     {
//         id: 43,
//         name: 'Cyprus',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg',
//     },
//     {
//         id: 44,
//         name: 'Czech Republic',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg',
//     },
//     {
//         id: 45,
//         name: 'Democratic Republic of the Congo (Congo-Kinshasa)',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg',
//     },
//     {
//         id: 46,
//         name: 'Denmark',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg',
//     },
//     {
//         id: 47,
//         name: 'Djibouti',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg',
//     },
//     {
//         id: 48,
//         name: 'Dominica',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg',
//     },
//     {
//         id: 49,
//         name: 'Dominican Republic',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg',
//     },
//     {
//         id: 50,
//         name: 'East Timor (Timor-Leste)',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg',
//     },
//     {
//         id: 51,
//         name: 'Ecuador',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg',
//     },
//     {
//         id: 52,
//         name: 'Egypt',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg',
//     },
//     {
//         id: 53,
//         name: 'El Salvador',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg',
//     },
//     {
//         id: 54,
//         name: 'Equatorial Guinea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg',
//     },
//     {
//         id: 55,
//         name: 'Eritrea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg',
//     },
//     {
//         id: 56,
//         name: 'Estonia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg',
//     },
//     {
//         id: 57,
//         name: 'Eswatini (fmr. Swaziland)',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Flag_of_Eswatini.svg',
//     },
//     {
//         id: 58,
//         name: 'Ethiopia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
//     },
//     {
//         id: 59,
//         name: 'Fiji',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg',
//     },
//     {
//         id: 60,
//         name: 'Finland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg',
//     },
//     {
//         id: 61,
//         name: 'France',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg',
//     },
//     {
//         id: 62,
//         name: 'Gabon',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg',
//     },
//     {
//         id: 63,
//         name: 'Gambia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg',
//     },
//     {
//         id: 64,
//         name: 'Georgia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg',
//     },
//     {
//         id: 65,
//         name: 'Germany',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg',
//     },
//     {
//         id: 66,
//         name: 'Ghana',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg',
//     },
//     {
//         id: 67,
//         name: 'Greece',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg',
//     },
//     {
//         id: 68,
//         name: 'Grenada',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg',
//     },
//     {
//         id: 69,
//         name: 'Guatemala',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg',
//     },
//     {
//         id: 70,
//         name: 'Guinea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg',
//     },
//     {
//         id: 71,
//         name: 'Guinea-Bissau',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg',
//     },
//     {
//         id: 72,
//         name: 'Guyana',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg',
//     },
//     {
//         id: 73,
//         name: 'Haiti',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg',
//     },
//     {
//         id: 74,
//         name: 'Honduras',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg',
//     },
//     {
//         id: 75,
//         name: 'Hungary',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg',
//     },
//     {
//         id: 76,
//         name: 'Iceland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg',
//     },
//     {
//         id: 77,
//         name: 'India',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg',
//     },
//     {
//         id: 78,
//         name: 'Indonesia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg',
//     },
//     {
//         id: 79,
//         name: 'Iran',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg',
//     },
//     {
//         id: 80,
//         name: 'Iraq',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg',
//     },
//     {
//         id: 81,
//         name: 'Ireland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg',
//     },
//     {
//         id: 82,
//         name: 'Israel',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg',
//     },
//     {
//         id: 83,
//         name: 'Italy',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
//     },
//     {
//         id: 84,
//         name: 'Jamaica',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
//     },
//     {
//         id: 85,
//         name: 'Japan',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg',
//     },
//     {
//         id: 86,
//         name: 'Jordan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg',
//     },
//     {
//         id: 87,
//         name: 'Kazakhstan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg',
//     },
//     {
//         id: 88,
//         name: 'Kenya',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg',
//     },
//     {
//         id: 89,
//         name: 'Kiribati',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg',
//     },
//     {
//         id: 90,
//         name: 'Kuwait',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg',
//     },
//     {
//         id: 91,
//         name: 'Kyrgyzstan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg',
//     },
//     {
//         id: 92,
//         name: 'Laos',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg',
//     },
//     {
//         id: 93,
//         name: 'Latvia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg',
//     },
//     {
//         id: 94,
//         name: 'Lebanon',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg',
//     },
//     {
//         id: 95,
//         name: 'Lesotho',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg',
//     },
//     {
//         id: 96,
//         name: 'Liberia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg',
//     },
//     {
//         id: 97,
//         name: 'Libya',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg',
//     },
//     {
//         id: 98,
//         name: 'Liechtenstein',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg',
//     },
//     {
//         id: 99,
//         name: 'Lithuania',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg',
//     },
//     {
//         id: 100,
//         name: 'Luxembourg',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg',
//     },
//     {
//         id: 101,
//         name: 'Madagascar',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg',
//     },
//     {
//         id: 102,
//         name: 'Malawi',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg',
//     },
//     {
//         id: 103,
//         name: 'Malaysia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg',
//     },
//     {
//         id: 104,
//         name: 'Maldives',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg',
//     },
//     {
//         id: 105,
//         name: 'Mali',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg',
//     },
//     {
//         id: 106,
//         name: 'Malta',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg',
//     },
//     {
//         id: 107,
//         name: 'Marshall Islands',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg',
//     },
//     {
//         id: 108,
//         name: 'Mauritania',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg',
//     },
//     {
//         id: 109,
//         name: 'Mauritius',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg',
//     },
//     {
//         id: 110,
//         name: 'Mexico',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg',
//     },
//     {
//         id: 111,
//         name: 'Micronesia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg',
//     },
//     {
//         id: 112,
//         name: 'Moldova',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg',
//     },
//     {
//         id: 113,
//         name: 'Monaco',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg',
//     },
//     {
//         id: 114,
//         name: 'Mongolia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg',
//     },
//     {
//         id: 115,
//         name: 'Montenegro',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg',
//     },
//     {
//         id: 116,
//         name: 'Morocco',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg',
//     },
//     {
//         id: 117,
//         name: 'Mozambique',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg',
//     },
//     {
//         id: 118,
//         name: 'Myanmar',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg',
//     },
//     {
//         id: 119,
//         name: 'Namibia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg',
//     },
//     {
//         id: 120,
//         name: 'Nauru',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg',
//     },
//     {
//         id: 121,
//         name: 'Nepal',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg',
//     },
//     {
//         id: 122,
//         name: 'Netherlands',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
//     },
//     {
//         id: 123,
//         name: 'New Zealand',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg',
//     },
//     {
//         id: 124,
//         name: 'Nicaragua',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg',
//     },
//     {
//         id: 125,
//         name: 'Niger',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg',
//     },
//     {
//         id: 126,
//         name: 'Nigeria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg',
//     },
//     {
//         id: 127,
//         name: 'North Korea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg',
//     },
//     {
//         id: 128,
//         name: 'North Macedonia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg',
//     },
//     {
//         id: 129,
//         name: 'Norway',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg',
//     },
//     {
//         id: 130,
//         name: 'Oman',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg',
//     },
//     {
//         id: 131,
//         name: 'Pakistan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg',
//     },
//     {
//         id: 132,
//         name: 'Palau',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg',
//     },
//     {
//         id: 133,
//         name: 'Palestine',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg',
//     },
//     {
//         id: 134,
//         name: 'Panama',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg',
//     },
//     {
//         id: 135,
//         name: 'Papua New Guinea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg',
//     },
//     {
//         id: 136,
//         name: 'Paraguay',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg',
//     },
//     {
//         id: 137,
//         name: 'Peru',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg',
//     },
//     {
//         id: 138,
//         name: 'Philippines',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg',
//     },
//     {
//         id: 139,
//         name: 'Poland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg',
//     },
//     {
//         id: 140,
//         name: 'Portugal',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
//     },
//     {
//         id: 141,
//         name: 'Qatar',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg',
//     },
//     {
//         id: 142,
//         name: 'Romania',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg',
//     },
//     {
//         id: 143,
//         name: 'Russia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg',
//     },
//     {
//         id: 144,
//         name: 'Rwanda',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg',
//     },
//     {
//         id: 145,
//         name: 'Saint Kitts and Nevis',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg',
//     },
//     {
//         id: 146,
//         name: 'Saint Lucia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg',
//     },
//     {
//         id: 147,
//         name: 'Saint Vincent and the Grenadines',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg',
//     },
//     {
//         id: 148,
//         name: 'Samoa',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg',
//     },
//     {
//         id: 149,
//         name: 'San Marino',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg',
//     },
//     {
//         id: 150,
//         name: 'Sao Tome and Principe',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Sao_Tome_and_Principe.svg',
//     },
//     {
//         id: 151,
//         name: 'Saudi Arabia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg',
//     },
//     {
//         id: 152,
//         name: 'Senegal',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg',
//     },
//     {
//         id: 153,
//         name: 'Serbia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg',
//     },
//     {
//         id: 154,
//         name: 'Seychelles',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg',
//     },
//     {
//         id: 155,
//         name: 'Sierra Leone',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg',
//     },
//     {
//         id: 156,
//         name: 'Singapore',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg',
//     },
//     {
//         id: 157,
//         name: 'Slovakia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg',
//     },
//     {
//         id: 158,
//         name: 'Slovenia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg',
//     },
//     {
//         id: 159,
//         name: 'Solomon Islands',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg',
//     },
//     {
//         id: 160,
//         name: 'Somalia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg',
//     },
//     {
//         id: 161,
//         name: 'South Africa',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg',
//     },
//     {
//         id: 162,
//         name: 'South Korea',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg',
//     },
//     {
//         id: 163,
//         name: 'South Sudan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg',
//     },
//     {
//         id: 164,
//         name: 'Spain',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg',
//     },
//     {
//         id: 165,
//         name: 'Sri Lanka',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
//     },
//     {
//         id: 166,
//         name: 'Sudan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg',
//     },
//     {
//         id: 167,
//         name: 'Suriname',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg',
//     },
//     {
//         id: 168,
//         name: 'Sweden',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg',
//     },
//     {
//         id: 169,
//         name: 'Switzerland',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg',
//     },
//     {
//         id: 170,
//         name: 'Syria',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_Syria.svg',
//     },
//     {
//         id: 171,
//         name: 'Taiwan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg',
//     },
//     {
//         id: 172,
//         name: 'Tajikistan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg',
//     },
//     {
//         id: 173,
//         name: 'Tanzania',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg',
//     },
//     {
//         id: 174,
//         name: 'Thailand',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg',
//     },
//     {
//         id: 175,
//         name: 'Togo',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg',
//     },
//     {
//         id: 176,
//         name: 'Tonga',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg',
//     },
//     {
//         id: 177,
//         name: 'Trinidad and Tobago',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
//     },
//     {
//         id: 178,
//         name: 'Tunisia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg',
//     },
//     {
//         id: 179,
//         name: 'Turkey',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg',
//     },
//     {
//         id: 180,
//         name: 'Turkmenistan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg',
//     },
//     {
//         id: 181,
//         name: 'Tuvalu',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg',
//     },
//     {
//         id: 182,
//         name: 'Uganda',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg',
//     },
//     {
//         id: 183,
//         name: 'Ukraine',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg',
//     },
//     {
//         id: 184,
//         name: 'United Arab Emirates',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg',
//     },
//     {
//         id: 185,
//         name: 'United Kingdom',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg',
//     },
//     {
//         id: 186,
//         name: 'United States',
//         flag: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
//     },
//     {
//         id: 187,
//         name: 'Uruguay',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg',
//     },
//     {
//         id: 188,
//         name: 'Uzbekistan',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg',
//     },
//     {
//         id: 189,
//         name: 'Vanuatu',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg',
//     },
//     {
//         id: 190,
//         name: 'Vatican City',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_the_Vatican_City.svg',
//     },
//     {
//         id: 191,
//         name: 'Venezuela',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg',
//     },
//     {
//         id: 192,
//         name: 'Vietnam',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg',
//     },
//     {
//         id: 193,
//         name: 'Yemen',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg',
//     },
//     {
//         id: 194,
//         name: 'Zambia',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg',
//     },
//     {
//         id: 195,
//         name: 'Zimbabwe',
//         flag: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg',
//     },
// ];