import React from 'react';

const Card = props => {
    console.log(props.data);
    const{ setUp , punchline } = props.data;
    return ( 
        <div className="col-xs-12 col-sm-6 col-md-4 mx-auto mt-5">
                <div className="image-flip" onTouchStart="this.classList.toggle('hover')">
                    <div className="mainflip">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h1 classNameName="card-title text-success">Setup</h1>
                                    <p className="card-text line">----------------------------------------------------------------------------------------------------------</p>
                                    <p className="card-text">{setUp}</p>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-center mt-4">
                                    <h4 className="card-title">Punchline</h4>
                                    <p className="card-text line">----------------------------------------------------------------------------------------------------------------</p>
                                    <p className="card-text">{punchline}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Card;