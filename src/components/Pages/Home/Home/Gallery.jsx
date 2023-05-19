


const Gallery = () => {
    // const photos = [
    //     {url:'https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg',name:'NHR Intelligent Talking Tom Cat'}
    // ]
    return (
        <div>
            <h1 className=" mt-14 text-center text-5xl font-bold ">Toy World</h1>
            <div className="grid my-20  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>
                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>
                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>
                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>
                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>
                <div className="relative border-8 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover  rounded-box"
                    />
                    <p className=" absolute -mt-10 ml-20 font-bold text-center">Inteligent Talking Tom</p>
                </div>

               

            </div>
        </div>
    );
};

export default Gallery;