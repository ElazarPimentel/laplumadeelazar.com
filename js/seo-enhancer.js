// SEO Enhancement - Dynamic Meta Tags and Article Metadata
const articleMetadata = {
    'se-marchitaran-las-flores': {
        description: 'Un relato emotivo sobre el fin de una relación y la importancia de los gestos finales. Reflexiones sobre el amor, la pérdida y la dignidad.',
        keywords: 'amor, desamor, relaciones, reflexión romántica, despedida, Elazar Pimentel'
    },
    'no-es-verdad': {
        description: 'Reflexión crítica sobre la autenticidad y los estereotipos sociales. Una mirada profunda sobre lo que realmente significa ser genuino.',
        keywords: 'autenticidad, filosofía, identidad, reflexión social, genuinidad, Elazar Pimentel'
    },
    'coleccion': {
        description: 'Poesía intensa sobre el amor y la memorización del ser amado. Un texto dedicado a Sophie de "The Speed Approach to Garbadale" de Iain Banks.',
        keywords: 'poesía, amor intenso, literatura, Iain Banks, dedicatoria, Elazar Pimentel'
    },
    'no-era-aca': {
        description: 'Relato breve inspirado en Moulin Rouge sobre un momento dramático en un cabaret parisino. Ficción y realidad se encuentran.',
        keywords: 'relato corto, París, cabaret, Moulin Rouge, ficción, Elazar Pimentel'
    },
    'es-dar-a-un-dichoso-muerte': {
        description: 'Reflexión filosófica sobre la felicidad y sus consecuencias. Un análisis profundo del estado de dicha.',
        keywords: 'filosofía, felicidad, reflexión, ensayo corto, Elazar Pimentel'
    },
    'comodo': {
        description: 'Texto sobre la comodidad y sus implicaciones en la vida cotidiana.',
        keywords: 'comodidad, vida cotidiana, reflexión personal, Elazar Pimentel'
    },
    'cuna-de-tiempo': {
        description: 'Exploración poética del concepto del tiempo y sus dimensiones.',
        keywords: 'tiempo, poesía, filosofía temporal, Elazar Pimentel'
    },
    'valor-hermosa-valor': {
        description: 'Un llamado al coraje y la valentía. Reflexiones sobre tener valor en momentos difíciles.',
        keywords: 'valor, coraje, valentía, motivación, Elazar Pimentel'
    },
    'los-filosofos': {
        description: 'Observaciones y reflexiones sobre los filósofos y el pensamiento filosófico.',
        keywords: 'filosofía, filósofos, pensamiento crítico, Elazar Pimentel'
    },
    'universo-infinito-de-ideas-finitas': {
        description: 'Ensayo filosófico sobre la paradoja entre la infinitud del universo y la finitud de las ideas humanas.',
        keywords: 'filosofía, universo, ideas, ensayo filosófico, infinito, Elazar Pimentel'
    },
    'mi-papa-fuma-pipa': {
        description: 'Relato personal y emotivo sobre la relación padre-hijo y los recuerdos familiares.',
        keywords: 'familia, padre, memorias, relato personal, Elazar Pimentel'
    },
    'cada-cual-en-su-lugar-no-lo-digo-yo-es-el-orden-natural': {
        description: 'Crítica social sobre los roles establecidos y el supuesto "orden natural" de las cosas.',
        keywords: 'crítica social, orden social, roles, reflexión social, Elazar Pimentel'
    },
    'hearts-of-queen': {
        description: 'Texto literario inspirado en cartas y símbolos del póker, explorando temas de poder y emoción.',
        keywords: 'literatura, símbolos, póker, metáfora, Elazar Pimentel'
    },
    'un-lugar-copado': {
        description: 'Reflexión sobre los lugares especiales y su significado en nuestras vidas.',
        keywords: 'lugares, espacios, reflexión, memorias, Elazar Pimentel'
    },
    'amor': {
        description: 'Meditación profunda sobre el concepto del amor en todas sus formas y manifestaciones.',
        keywords: 'amor, filosofía del amor, sentimientos, reflexión romántica, Elazar Pimentel'
    },
    'veneno': {
        description: 'Relato oscuro sobre relaciones tóxicas y sus efectos devastadores en el alma.',
        keywords: 'relaciones tóxicas, veneno emocional, drama, relato oscuro, Elazar Pimentel'
    },
    'el-empleo-del-tiempo': {
        description: 'Ensayo sobre cómo empleamos nuestro tiempo y las decisiones que definen nuestras vidas.',
        keywords: 'tiempo, productividad, vida, decisiones, ensayo, Elazar Pimentel'
    },
    'a-rio-revuelto': {
        description: 'Reflexión sobre aprovechar situaciones caóticas y el dicho popular "a río revuelto, ganancia de pescadores".',
        keywords: 'oportunismo, caos, sociedad, refranes, Elazar Pimentel'
    },
    'instituciones-religiosas-en-los-barrios-adinerados': {
        description: 'Análisis crítico sobre la presencia de instituciones religiosas en zonas de alta renta y sus implicaciones sociales.',
        keywords: 'religión, crítica social, desigualdad, instituciones, Elazar Pimentel'
    },
    'al-menos': {
        description: 'Reflexión sobre conformismo y esperanza a través de la expresión "al menos".',
        keywords: 'conformismo, esperanza, resignación, reflexión, Elazar Pimentel'
    },
    'la-suma-del-conjunto': {
        description: 'Exploración matemático-filosófica sobre cómo el todo es más que la suma de las partes.',
        keywords: 'filosofía, matemáticas, totalidad, conjunto, Elazar Pimentel'
    },
    'el-oro-es-tiempo': {
        description: 'Ensayo sobre el valor del tiempo como el verdadero oro de la existencia.',
        keywords: 'tiempo, valor, riqueza, filosofía, Elazar Pimentel'
    },
    'coherencia': {
        description: 'Reflexión sobre la importancia de la coherencia entre pensamiento y acción.',
        keywords: 'coherencia, integridad, ética, filosofía personal, Elazar Pimentel'
    },
    'adivinar': {
        description: 'Texto sobre la adivinación, la incertidumbre y el deseo humano de conocer el futuro.',
        keywords: 'adivinación, futuro, incertidumbre, destino, Elazar Pimentel'
    },
    'el-exceso-de-confianza': {
        description: 'Advertencia sobre los peligros del exceso de confianza y sus consecuencias.',
        keywords: 'confianza, soberbia, advertencia, psicología, Elazar Pimentel'
    },
    'la-tierra-me-entierra': {
        description: 'Poema existencial sobre la relación entre el ser humano y la tierra, la vida y la muerte.',
        keywords: 'poesía, existencialismo, tierra, muerte, Elazar Pimentel'
    },
    'diciembre': {
        description: 'Reflexiones nostálgicas sobre el mes de diciembre y sus significados personales y colectivos.',
        keywords: 'diciembre, nostalgia, fin de año, reflexión temporal, Elazar Pimentel'
    },
    'mas-o-menos-bien': {
        description: 'Exploración de la ambigüedad emocional y el estado de estar "más o menos bien".',
        keywords: 'emociones, ambigüedad, estado de ánimo, reflexión personal, Elazar Pimentel'
    },
    'me-voy-a-manatan': {
        description: 'Relato humorístico sobre irse a Manhattan con un personaje llamado Pocho "la Pantera".',
        keywords: 'humor, viaje, Manhattan, relato divertido, Elazar Pimentel'
    },
    'estilo-rosado-rosario': {
        description: 'Texto sobre estilos de vida y referencias a Rosario, explorando identidades culturales.',
        keywords: 'estilo, cultura, Rosario, identidad, Elazar Pimentel'
    },
    'y-la-muerte-no-tendra-senorio': {
        description: 'Reflexión sobre la inmortalidad del espíritu humano, inspirado en Dylan Thomas.',
        keywords: 'muerte, inmortalidad, Dylan Thomas, poesía, Elazar Pimentel'
    },
    'nosce-te-ipsum': {
        description: 'Ensayo filosófico sobre el antiguo precepto griego "Conócete a ti mismo" y su relevancia actual.',
        keywords: 'filosofía griega, autoconocimiento, Sócrates, sabiduría, Elazar Pimentel'
    },
    'nunca-supo-lo-que-sabia': {
        description: 'Paradoja sobre el conocimiento inconsciente y la sabiduría que poseemos sin saberlo.',
        keywords: 'conocimiento, sabiduría, paradoja, epistemología, Elazar Pimentel'
    },
    'la-espera-que-no-es-pera': {
        description: 'Juego de palabras y reflexión sobre la espera y sus múltiples significados.',
        keywords: 'espera, paciencia, juego de palabras, tiempo, Elazar Pimentel'
    },
    'lei-en-un-libro-olvidado': {
        description: 'Relato sobre descubrimientos en libros olvidados y la memoria literaria.',
        keywords: 'libros, lectura, memoria, literatura, Elazar Pimentel'
    },
    'hielo-como-el-frio': {
        description: 'Metáfora sobre el frío emocional y la distancia en las relaciones humanas.',
        keywords: 'frío, distancia emocional, metáfora, relaciones, Elazar Pimentel'
    },
    'soñar-con-la-maquina-del-tiempo-o-ser-la-maquina-del-tiempo': {
        description: 'Reflexión filosófica sobre si debemos soñar con cambiar el tiempo o convertirnos nosotros mismos en agentes del cambio temporal.',
        keywords: 'tiempo, máquina del tiempo, filosofía, ciencia ficción, cambio, Elazar Pimentel'
    }
};

// Update meta tags based on current hash
function updateMetaTags() {
    const hash = window.location.hash.substring(1); // Remove the #

    if (hash && articleMetadata[hash]) {
        const meta = articleMetadata[hash];

        // Update meta description
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', meta.description);
        }

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', meta.keywords);
        }

        // Update Open Graph description
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
            ogDesc.setAttribute('content', meta.description);
        }

        // Update Twitter description
        let twitterDesc = document.querySelector('meta[name="twitter:description"]');
        if (twitterDesc) {
            twitterDesc.setAttribute('content', meta.description);
        }

        // Update Open Graph URL
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', `https://laplumadeelazar.com/#${hash}`);
        }

        // Update page title
        const article = document.getElementById(hash);
        if (article) {
            const h2 = article.querySelector('h2');
            if (h2) {
                document.title = `${h2.textContent} - Elazar Pimentel | LaPlumaDeElazar.com`;
            }
        }
    } else {
        // Reset to default
        let metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Colección de escritos, reflexiones y relatos cortos de Elazar Pimentel, también conocido como Alessio Aguirre Pimentel.');
        }

        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', 'Elazar Pimentel, Alessio Aguirre Pimentel, escritos, reflexiones, literatura, poemas, cuentos, ensayos, relatos');
        }

        document.title = 'Cosas que escribo yo - Elazar Pimentel | LaPlumaDeElazar.com';
    }
}

// Listen for hash changes
window.addEventListener('hashchange', updateMetaTags);

// Run on page load
document.addEventListener('DOMContentLoaded', updateMetaTags);
