import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personal journey</span>
        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
                }
                    onClick={()=>toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Academic
                </div>
                <div className={
                    toggleState === 2 ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
                }
                    onClick={()=>toggleTab(2)}
                >
                    <i className="uil uil-award qualification__icon"></i>
                    Extra-curricular
                </div>
            </div>
            <div className="qualification__sections">
                <div className={toggleState === 1 ?"qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">BSC(Hons) Software Engineering</h3>
                            <span className="qualification__subtitle">University of Kelaniya</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Comprehensive Master Java Developer</h3>
                            <span className="qualification__subtitle">Institute of Software Engineering (IJSE)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2020
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Diploma in English</h3>
                            <span className="qualification__subtitle">Esoft Metro Campus</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">G.C.E. Advanced Level Examination (physical)</h3>
                            <span className="qualification__subtitle">Mahinda College, Galle (B-3)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">G.C.E. Ordinary Level Examination</h3>
                            <span className="qualification__subtitle">Mahinda College, Galle (A-8,B-1)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2014
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                <div className={toggleState === 2 ?"qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Vice-president</h3>
                            <span className="qualification__subtitle">Software Engineering Students’ Association</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Financial Team member</h3>
                            <span className="qualification__subtitle">Let’s Talk National Project (IEEE YPSL)</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023 - present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Vice-Captain</h3>
                            <span className="qualification__subtitle">University Table Tennis Team</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Committee member</h3>
                            <span className="qualification__subtitle">IEEE Student Branch</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - 2023
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Tuba Player</h3>
                            <span className="qualification__subtitle">National Youth Orchestra, Sri Lanka</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2019 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Sergent</h3>
                            <span className="qualification__subtitle">College Western Cadet Band Platoon</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2019
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Head Prefect</h3>
                            <span className="qualification__subtitle">Dhamma School</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2014 - 2015
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Cub Scout</h3>
                            <span className="qualification__subtitle">College Scout Platoon</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2009
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification