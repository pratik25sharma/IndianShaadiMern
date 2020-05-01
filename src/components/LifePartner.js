import React from 'react';
import '../css/lifepartner.css';
import signin from '../signin.png';
import fblike from '../fblike.png';
import verified from '../verified.png';
import privacy from '../privacy.png';
import price from '../price.png';
import mediator from '../mediator.png';

const lifePartnerDesc = [
    {
        image: signin,
        desc: 'Free Register Your Profile & Get 21 Contact Free'
    },
    {
        image: fblike,
        desc: 'Like Our Facebook Page & Get 7 Contact Free'
    },
    {
        image: verified,
        desc: 'Every Profile Is Phone Verified.'
    },
    {
        image: privacy,
        desc: 'Select Your Privacy By Filling Your Profile'
    },
    {
        image: price,
        desc: 'Package Started By 5 Contact Pack'
    },
    {
        image: mediator,
        desc: 'Start Your Conversation Directly'
    }
]


/* <img src="images/signin.png">
				<span>Free Register Your Profile & Get 21 Contact Free</span>
			</li>
			<li class="lft_ani">
				<img src="images/fblike.png">
				<span>Like Our Facebook Page & Get 7 Contact Free</span>
			</li>
			<li class="lft_ani">
				<img src="images/verified.png">
				<span>Every Profile Is Phone Verified.</span>
			</li>

			<li class="rgt_ani">
				<img src="images/privacy.png">
				<span>Select Your Privacy By Filling Your Profile</span>
			</li>
			<li class="rgt_ani">
				<img src="images/price.png">
				<span>Package Started By 5 Contact Pack</span>
			</li>
			<li class="rgt_ani">
				<img src="images/mediator.png"></img>
import singin */

const lifePartnerHeading = ['fa-heart', 'fa-heart', 'fa-heart'];

const LifePartner = () => {

    return (
        <section className="find_prtnr visible">
            <div className="wrapper">
                <div className="heading">
                    <span>Find Your life Partner</span>
                    <p>
                        {lifePartnerHeading.map(heading => {
                            return (<i class={`fas ${heading}`}></i>)
                        }) }
                    </p>
                </div>
                <ul>
                    {lifePartnerDesc.map((data, i) => {
                        return (
                            <li class={i < 3 ? 'lft_ani' : 'rgt_ani'}>
                                <img src={data.image} alt=''/>
                                <span>{data.desc}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default LifePartner;
