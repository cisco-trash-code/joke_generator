import React from 'react';

const Card = () => {
    return ( 
        <div class="col-xs-12 col-sm-6 col-md-4 mx-auto mt-5">
                <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div class="mainflip">
                        <div class="frontside">
                            <div class="card">
                                <div class="card-body text-center">
                                    <h1 className="card-title">Setup</h1>
                                    <p class="card-text">----------------------------------------------------------------------------------------------------------</p>
                                </div>
                            </div>
                        </div>
                        <div class="backside">
                            <div class="card">
                                <div class="card-body text-center mt-4">
                                    <h4 class="card-title">Punchline</h4>
                                    <p class="card-text">----------------------------------------------------------------------------------------------------------</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Card;