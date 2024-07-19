import aspire from '../assets/port/aspire.png'
import tic from '../assets/port/tic_tac.png'
import url from '../assets/port/url_shortener.png'
import recommend from '../assets/port/movie_recommender.png'
import image from '../assets/port/image_uploader.png'
import digital from "../assets/port/digital.png"
const Portfolios = () => {

    const array=[
        {
            id:1,
            src:tic,
            title: 'Tic-Tac-Toe',
            codeLink: 'https://github.com/deba0272/Tic-Tac-Toe'
        },
        {
            id:2,
            src:url,
            title: 'URL Shortener',
            codeLink: 'https://github.com/deba0272/Url_Shortener-Stateful'
        },
        {
            id:3,
            src:image,
            title: 'Image-Uploader',
            codeLink: 'https://github.com/deba0272/Image_Uploader'
        },
        {
            id:4,
            src:recommend,
            title: 'Movie Recommender',
            codeLink: 'https://github.com/deba0272/Movie_Recommender'
        },
        {
        
            id:5,
            src:digital,
            title: 'Digital Marketing Website',
            codeLink: 'https://github.com/deba0272/Internship-at-Teachnook'
        },
        {
            id:6,
            src:aspire,
            title: 'Aspire Hub Career Website',
            codeLink: 'https://github.com/deba0272/aspire-hub-career-website'
        }
    ]

    return (
        <div name="portfolio" className="font-serif bg-gradient-to-b from-gray-700 via-slate-800 to-gray-900 text-white w-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-600">Portfolio</p>
                    <p className="py-6 text-2xl">Have a look at my cutting-edge projects!</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 px-16 sm:px-0">
                    {array.map(({id, src, title, codeLink}) => (
                        <div key={id} className="shadow-md shadow-gray-500 rounded-lg">
                            <img src={src} alt={title} className="rounded-md duration-200 hover:scale-x-110"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <div className="flex item-center justify-center mt-4">
                                    <a href={codeLink} className="w-full px-6 py-3 m-2 duration-200 hover:scale-110 text-center bg-slate-500 rounded-lg shadow-md">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolios
