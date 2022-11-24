import holland from '../assets/flags/holland.svg';
import senegal from '../assets/flags/senegal.png';
import ecuador from '../assets/flags/ecuador.svg';
import qatar from '../assets/flags/q.svg';



function Content() {
    return (
        <div className='content'>
            <div className='title'>
                <h1>
                    MAKE YOUR WORLD CUP PREDICTIONS
                </h1>
            </div>

            <div className='cards'>
                <div className='card'>
                    <div className='cardOne'>
                        <h2>
                            Group A
                        </h2>

                        <div className='flags'>
                            <img className='flag' src={holland} alt='flag' />
                            <img className='flag' src={senegal} alt='flag' />
                            <img className='flag' src={ecuador} alt='flag' />
                            <img className='flag' src={qatar} alt='flag' />
                        </div>
                    </div>

                    <div className='cardTwo'>
                        <div className='first box'>
                            <div className='list'>
                                <p>1</p> 
                                <span></span>
                            </div>

                            <div className='choice'>

                            </div>
                        </div>

                        <div className='second box'>
                            <div className='list'>
                                <p>2</p> 
                                <span></span>
                            </div>
    
                            <div className='choice'>

                            </div>
                        </div>

                        <div className='third box'>
                            <div className='list'>
                                <p>3</p> 
                                <span></span>
                            </div>

                            <div className='choice'>

                            </div>
                        </div>

                        <div className='fourth box'>
                            <div className='list'>
                                <p>4</p> 
                                <span></span>
                            </div>
    
                           <div className='choice'>
    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;