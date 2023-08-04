import React from 'react';
import "./Ask_Me.css";
import stateList from "./Ask_Me.json";

const AskMe = () => {
  return (
    <>
      <div className='ask_me_main_panel'>
        <div className='ask_me_heading'>
          <h2>Ask Me</h2>
        </div>
        <div>
          <form>
            <div className='label_section_div'>
              <label>From: <input placeholder='abc@gmail.com' type='email'></input></label>
            </div>
            <div className='label_section_div'>
              <label>Name: <input placeholder='Enter your name' type='email'></input></label>
            </div>
            <div className='label_section_div'>

              <label>State:
                <select name='state' id='state'>
                  {stateList.map(stateName => {
                    return (
                      <option value={stateName.value}>{stateName.state}</option>
                    )
                  })}
                </select>
              </label>
            </div>
            <div className='label_section_div'>
              <label>Topic: <input placeholder='About Topic' type='text'></input></label>
            </div>
            <div className='label_section_div'>
              <textarea type='text' placeholder='your question...' ></textarea>

            </div>
            <button type='submit' className='submit_btn_ask_me'> Submit </button>
          </form>

        </div>
      </div>
    </>
  )
}

export default AskMe;
