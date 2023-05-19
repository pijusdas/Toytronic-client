import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const ShopCategory = () => {
    return (
        <>
            <h1 className=' text-5xl text-center font-bold mb-12'>Shop By Category</h1>
            <div className=' flex justify-center mb-10'>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <div className=' grid grid-cols-2'>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-2'>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className=' grid grid-cols-2'>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card w-96 glass">
                                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Life hack</h2>
                                    <p>How to park your car at your garage?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Learn now!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                     
                </Tabs>
            </div>
        </>
    );
};

export default ShopCategory;