import React from 'react';
import classes from  "./Toppers_Plan_Strategy.module.css";

const ToppersPlanStrategy = () => {
    return (
        <>
            <div className={classes.strategy_card}>
                <div className={classes.plan_strategy_heading}> <h2>Toppers Strategy and planning</h2></div>
                <div className={classes.multiple_toppers_advices}>
                    <div className={classes.toppers_advice}>
                        <h3>1. Strategy and Target</h3>
                        <p>Strategy and target are the first and foremost
                            things while beginning the preparation for SSC.</p>
                        <h3 className={classes.name}>J.K. Thakur (SSC CGL AIR-1, 2021)</h3>
                    </div>

                    <div className={classes.toppers_advice}>
                        <h3>2. Positive Attitude</h3>
                        <p>“Prioritize your strengths and weaknesses and focus
                            on improving your weaker areas. Keep a positive
                            attitude and  stay motivated.”</p>
                        <h3 className={classes.name}>Rahul Kumar ( SSC, CPO  AIR - 01, 2022 )</h3>
                    </div>

                    <div className={classes.toppers_advice}>
                        <h3>3. Limit your sources</h3>
                        <p>“Figure out what you want to study and from
                            where and know it page to page. Stick to it and
                            revise thoroughly  and focus on the mock tests.
                            I used to do a mock a day.</p>
                        <h3 className={classes.name}>A.K.Singh  ( SSC CHSL AIR - 11, 2022 )</h3>
                    </div>

                    <div className={classes.toppers_advice}>
                        <h3>4. Newspaper & Current Affairs</h3>
                        <p>40% of the questions in SSC exams come from
                            current affairs and often students think that news
                            papers and current affairs materials consume a lot
                            of time and hence let them pile up.</p>
                        <h3 className={classes.name}>Anish Kumar ( SSC AIR - 15, 2020 )</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToppersPlanStrategy;
