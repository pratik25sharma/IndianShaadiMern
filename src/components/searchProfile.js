import React from 'react';
import '../css/searchProfile.css';

const searchProfile = () => {
    return (
        <section className="search_profile">
	        <div className="wrapper">
		        <div class="heading">
			        <span>Profile Search</span>
                    <p>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-heart"></i>
                    </p>
		        </div>
		        <div className="form_section">
                    <div className="form_group">
                        <p>I am looking for</p>
                        <select>
                            <option>Man</option>
                            <option>Women</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form_group age">
                        <p>person age</p>
                        <select>
                            <option>25</option>
                            <option>26</option>
                            <option>27</option>
                        </select>
                        <span>to</span>
                        <select>
                            <option>35</option>
                            <option>36</option>
                            <option>37</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <p>of religion</p>
                        <select>
                            <option>Select</option>
                            <option>Hindu</option>
                            <option>Punjabi</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <p>and mother tounge</p>
                        <select>
                            <option>Select</option>
                            <option>Hindi</option>
                            <option>Punjabi</option>
                        </select>
                    </div>
                    <div className="form_group">
                        <p>&nbsp;</p>
                        <button className="btn clr_fill">Let's Begin</button>
                    </div>
		        </div>
	        </div>
        </section>
    );
}

export default searchProfile;