import { reactive } from "vue";

export const store = reactive ({
    films: [],
    series: [],
    titleSearched: '',
    bandiere: 
                [{ 
                    lingua: 'it',
                    bandiera: '🇮🇹'
                },
                {
                    lingua: 'es',
                    bandiera:'🇪🇸',
                },
                {
                    lingua: 'fr',
                    bandiera:'🇫🇷',
                },
                {
                    lingua: 'en',
                    bandiera:'🇺🇸'
                }
              ],

    stelle: 
            [{ 
                voto: 0, 
                numeroStelle: '' 
            },
            { 
                voto: 1, 
                numeroStelle: '⭐️' 
            },
            { 
                voto: 2, 
                umeroStelle: '⭐️⭐️' 
            },
            { 
                voto: 3, 
                numeroStelle: '⭐️⭐️⭐️' 
            },
            { 
                voto: 4, 
                numeroStelle: '⭐️⭐️⭐️⭐️' 
            },
            { 
                voto: 5, 
                numeroStelle: '⭐️⭐️⭐️⭐️⭐️' 
            }
        ],

});