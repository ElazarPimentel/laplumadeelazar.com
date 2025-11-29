// Internal Linking - Related Articles
const relatedArticles = {
    'se-marchitaran-las-flores': ['amor', 'veneno', 'coleccion'],
    'no-es-verdad': ['coherencia', 'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural', 'los-filosofos'],
    'coleccion': ['se-marchitaran-las-flores', 'amor', 'valor-hermosa-valor'],
    'no-era-aca': ['me-voy-a-manatan', 'hearts-of-queen', 'estilo-rosado-rosario'],
    'comodo': ['coherencia', 'mas-o-menos-bien', 'al-menos'],
    'cuna-de-tiempo': ['el-oro-es-tiempo', 'el-empleo-del-tiempo', 'la-espera-que-no-es-pera'],
    'valor-hermosa-valor': ['se-marchitaran-las-flores', 'coleccion', 'amor'],
    'los-filosofos': ['universo-infinito-de-ideas-finitas', 'nosce-te-ipsum', 'no-es-verdad'],
    'universo-infinito-de-ideas-finitas': ['los-filosofos', 'nosce-te-ipsum', 'nunca-supo-lo-que-sabia'],
    'mi-papa-fuma-pipa': ['la-suma-del-conjunto', 'diciembre', 'lei-en-un-libro-olvidado'],
    'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural': ['instituciones-religiosas-en-los-barrios-adinerados', 'a-rio-revuelto', 'no-es-verdad'],
    'hearts-of-queen': ['un-lugar-copado', 'no-era-aca', 'estilo-rosado-rosario'],
    'un-lugar-copado': ['hearts-of-queen', 'diciembre', 'mas-o-menos-bien'],
    'amor': ['se-marchitaran-las-flores', 'coleccion', 'veneno'],
    'veneno': ['amor', 'se-marchitaran-las-flores', 'hielo-como-el-frio'],
    'el-empleo-del-tiempo': ['el-oro-es-tiempo', 'cuna-de-tiempo', 'la-espera-que-no-es-pera'],
    'a-rio-revuelto': ['instituciones-religiosas-en-los-barrios-adinerados', 'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural', 'el-exceso-de-confianza'],
    'instituciones-religiosas-en-los-barrios-adinerados': ['a-rio-revuelto', 'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural', 'coherencia'],
    'al-menos': ['mas-o-menos-bien', 'comodo', 'la-suma-del-conjunto'],
    'la-suma-del-conjunto': ['universo-infinito-de-ideas-finitas', 'mi-papa-fuma-pipa', 'los-filosofos'],
    'el-oro-es-tiempo': ['el-empleo-del-tiempo', 'cuna-de-tiempo', 'la-espera-que-no-es-pera'],
    'coherencia': ['no-es-verdad', 'instituciones-religiosas-en-los-barrios-adinerados', 'adivinar'],
    'adivinar': ['coherencia', 'nunca-supo-lo-que-sabia', 'la-espera-que-no-es-pera'],
    'el-exceso-de-confianza': ['a-rio-revuelto', 'coherencia', 'adivinar'],
    'la-tierra-me-entierra': ['y-la-muerte-no-tendra-senorio', 'hielo-como-el-frio', 'diciembre'],
    'diciembre': ['la-tierra-me-entierra', 'mas-o-menos-bien', 'mi-papa-fuma-pipa'],
    'mas-o-menos-bien': ['al-menos', 'diciembre', 'comodo'],
    'me-voy-a-manatan': ['no-era-aca', 'estilo-rosado-rosario', 'hearts-of-queen'],
    'estilo-rosado-rosario': ['me-voy-a-manatan', 'no-era-aca', 'hearts-of-queen'],
    'y-la-muerte-no-tendra-senorio': ['la-tierra-me-entierra', 'hielo-como-el-frio', 'se-marchitaran-las-flores'],
    'nosce-te-ipsum': ['universo-infinito-de-ideas-finitas', 'los-filosofos', 'nunca-supo-lo-que-sabia'],
    'nunca-supo-lo-que-sabia': ['nosce-te-ipsum', 'universo-infinito-de-ideas-finitas', 'adivinar'],
    'la-espera-que-no-es-pera': ['el-empleo-del-tiempo', 'el-oro-es-tiempo', 'cuna-de-tiempo'],
    'lei-en-un-libro-olvidado': ['mi-papa-fuma-pipa', 'diciembre', 'universo-infinito-de-ideas-finitas'],
    'hielo-como-el-frio': ['veneno', 'la-tierra-me-entierra', 'y-la-muerte-no-tendra-senorio'],
    'soñar-con-la-maquina-del-tiempo-o-ser-la-maquina-del-tiempo': ['cuna-de-tiempo', 'el-oro-es-tiempo', 'universo-infinito-de-ideas-finitas']
};

// Article titles for display
const articleTitles = {
    'se-marchitaran-las-flores': 'Se marchitarán las flores…',
    'no-es-verdad': 'No es verdad que una persona es más genuina según sea más burda',
    'coleccion': 'Colección',
    'no-era-aca': 'No era acá',
    'comodo': 'Cómodo',
    'cuna-de-tiempo': 'Cuna de tiempo',
    'valor-hermosa-valor': 'Valor, hermosa. Valor.',
    'los-filosofos': 'Los Filósofos',
    'universo-infinito-de-ideas-finitas': 'Universo Infinito de Ideas Finitas',
    'mi-papa-fuma-pipa': 'Mi papá fuma pipa',
    'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural': 'Cada cual en su lugar',
    'hearts-of-queen': 'Hearts of Queen',
    'un-lugar-copado': 'Un lugar Copado',
    'amor': 'Amor',
    'veneno': 'Veneno',
    'el-empleo-del-tiempo': 'El Empleo del Tiempo',
    'a-rio-revuelto': 'A Río Revuelto',
    'instituciones-religiosas-en-los-barrios-adinerados': 'Instituciones Religiosas en los Barrios Adinerados',
    'al-menos': 'Al menos',
    'la-suma-del-conjunto': 'La Suma del Conjunto',
    'el-oro-es-tiempo': 'El Oro es Tiempo',
    'coherencia': 'Coherencia',
    'adivinar': 'Adivinar',
    'el-exceso-de-confianza': 'El Exceso de Confianza',
    'la-tierra-me-entierra': 'La tierra me entierra',
    'diciembre': 'Diciembre',
    'mas-o-menos-bien': 'Más o Menos bien',
    'me-voy-a-manatan': 'Me voy a Manatan',
    'estilo-rosado-rosario': 'Estilo Rosado Rosario',
    'y-la-muerte-no-tendra-senorio': 'Y la Muerte No Tendrá Señorío',
    'nosce-te-ipsum': 'Nosce te ipsum',
    'nunca-supo-lo-que-sabia': 'Nunca supo, lo que sabía…',
    'la-espera-que-no-es-pera': 'La espera que no es pera',
    'lei-en-un-libro-olvidado': 'Leí en un libro olvidado',
    'hielo-como-el-frio': 'Hielo como el Frío',
    'soñar-con-la-maquina-del-tiempo-o-ser-la-maquina-del-tiempo': '¿Soñar con la Máquina del Tiempo?'
};

function addRelatedArticles() {
    // Get all articles
    const articles = document.querySelectorAll('article[id]');

    articles.forEach(article => {
        const articleId = article.id;
        const related = relatedArticles[articleId];

        if (related && related.length > 0) {
            // Create related articles section
            const relatedSection = document.createElement('div');
            relatedSection.className = 'related-articles';

            const heading = document.createElement('h3');
            heading.textContent = 'Artículos relacionados';
            relatedSection.appendChild(heading);

            const list = document.createElement('ul');
            list.className = 'related-articles-list';

            related.forEach(relatedId => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${relatedId}`;
                link.textContent = articleTitles[relatedId] || relatedId;
                link.className = 'related-article-link';
                li.appendChild(link);
                list.appendChild(li);
            });

            relatedSection.appendChild(list);

            // Insert before the back-to-top link
            const backToTop = article.querySelector('.back-to-top');
            if (backToTop) {
                article.insertBefore(relatedSection, backToTop);
            } else {
                article.appendChild(relatedSection);
            }
        }
    });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', addRelatedArticles);
