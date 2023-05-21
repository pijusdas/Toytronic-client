


const Gallery = () => {
    // const photos = [
    //     {url:'https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg',name:'NHR Intelligent Talking Tom Cat'}
    // ]
    return (
        <div>
            <h1 className=" mt-14 text-center text-5xl font-bold ">Toy World</h1>
            <div className="grid my-20  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800">
                    <img
                        src='https://m.media-amazon.com/images/I/31l7U8n68OL._SX300_SY300_QL70_FMwebp_.jpg'
                        alt={`Photo  `}
                        className="object-cover h-full  rounded-box"
                    />
                    
                </div>
                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800 ">
                    <img
                        src='https://media.istockphoto.com/id/528289050/photo/blue-rc-truck-car.jpg?s=612x612&w=0&k=20&c=OQReO2aVHcOrtVAgWCNTZs_-OVSiMX4ECi97_JH19FQ='
                        alt={`Photo  `}
                        className="object-cover h-full  rounded-box"
                    />
                   
                </div>
                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800">
                    <img
                        src='https://m.media-amazon.com/images/I/717r6lhGh2S._AC_UL600_FMwebp_QL65_.jpg'
                        alt={`Photo  `}
                        className="object-cover h-full rounded-box"
                    />
                  
                </div>
                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800">
                    <img
                        src='https://m.media-amazon.com/images/I/61ly4Bz8yYL._AC_UL600_FMwebp_QL65_.jpg'
                        alt={`Photo  `}
                        className="object-cover h-full rounded-box"
                    />
                    
                </div>
                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800">
                    <img
                        src='https://m.media-amazon.com/images/I/61XdaIoTB9L._AC_UL600_FMwebp_QL65_.jpg'
                        alt={`Photo  `}
                        className="object-cover h-full rounded-box"
                    />
                   
                </div>
                <div className="relative border-4 shadow-2xl rounded-t-2xl border-green-600 aspect-w-1 aspect-h-1 shadow-green-800">
                    <img
                        src='https://m.media-amazon.com/images/I/81pRMblrjJL._AC_UL600_FMwebp_QL65_.jpg'
                        alt={`Photo  `}
                        className="object-cover h-full  rounded-box"
                    />
                     
                </div>

               

            </div>
        </div>
    );
};

export default Gallery;