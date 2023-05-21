import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const AosPackage = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,

        });
    }, []);

    return (
        <div className='my-32'>
            <h1 className=' text-5xl font-bold text-center mb-10'>We Provide Best Products</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-11 lg:grid-cols-2 '>
                <div data-aos="fade-right">

                    <div className="card card-compact w-full bg-emerald-400 mb-10 shadow-2xl">
                        <figure><img src="https://media.istockphoto.com/id/528289050/photo/blue-rc-truck-car.jpg?s=612x612&w=0&k=20&c=OQReO2aVHcOrtVAgWCNTZs_-OVSiMX4ECi97_JH19FQ=" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                             

                        </div>
                    </div>
                </div>
                <div data-aos="fade-left"  >

                    <div className="card card-compact w-full bg-emerald-400 mb-10 shadow-2xl">
                        <figure><img src="https://st2.depositphotos.com/2953509/8538/i/600/depositphotos_85382666-stock-photo-little-boy-driving-car.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                             
                            
                        </div>
                    </div>

                </div>
                <div data-aos="fade-up"  >

                    <div className="card card-compact full bg-emerald-400 mb-10 shadow-2xl">
                        <figure><img src="https://static4.depositphotos.com/1012656/290/i/600/depositphotos_2905063-stock-photo-toy-steam-train-and-caboose.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                             
                            
                        </div>
                    </div>

                </div>
                <div data-aos="flip-left"  >

                    <div className="card card-compact full bg-emerald-400 mb-10 shadow-2xl">
                        <figure><img src="https://st2.depositphotos.com/1055484/43193/i/600/depositphotos_431930722-stock-photo-vintage-tin-robot-toy-isolated.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Toys</h2>
                             
                             
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AosPackage;