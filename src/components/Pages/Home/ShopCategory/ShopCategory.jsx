import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCart from './CategoryCart';
import RoboticShopCart from './RoboticShopCart';
import VehilcleToy from './VehilcleToy';
const ShopCategory = () => {
 const [IntelligentToy, settIntelligentsToy] = useState([])
 const [roboticsToy,setRoboticsToy] = useState([])
 const [vehicleTos,setVehicleToys] = useState([])

 console.log(IntelligentToy)
    useEffect(()=>{
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data =>{
            const filterIntelligentsToy = data.filter(t => t.category.value === 'Intelligent-toy' ) 
            settIntelligentsToy(filterIntelligentsToy)

            const filterRoboticsToy = data.filter(t => t.category.value === 'Robotics-toy' ) 
            setRoboticsToy( filterRoboticsToy)

            const filterVehicleToy = data.filter(t => t.category.value === 'Vehicle-toy');
            setVehicleToys(filterVehicleToy)
        })
    },[])
    return (
        <>
            <h1 className=' text-5xl text-center font-bold mb-12'>Shop By Category</h1>
            <div className=' flex justify-center  mb-10'>
                <Tabs>
                    <TabList className={'bg-green-400 rounded-2xl shadow-2xl'}>
                        <Tab>Intelligents Toys</Tab>
                        <Tab>Robotics Toys</Tab>
                        <Tab>Vehicle Toys</Tab>
                    </TabList>

                    <TabPanel>
                         <div className=' grid gap-8 grid-cols-1 lg:grid-cols-2'>
                            {
                                IntelligentToy && IntelligentToy.map(toy => <CategoryCart key={toy._id} toy={toy}></CategoryCart>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid gap-8 grid-cols-1 lg:grid-cols-2'>
                           
                             {
                                roboticsToy && roboticsToy.map(toy => <RoboticShopCart key={toy._id} toy={toy}></RoboticShopCart>)
                             }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-2'>
                           
                            {
                                vehicleTos && vehicleTos.map(toy => <VehilcleToy key={toy._id} toy={toy}></VehilcleToy>)
                            }
                        </div>
                    </TabPanel>
                     
                </Tabs>
            </div>
        </>
    );
};

export default ShopCategory;