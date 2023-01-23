import '../css/survey.css'
import { useState } from 'react'


const Survey = ({ isJoined }) => {
    // const [myname, setMyname] = useState('')
    // const handleMyname = (event) => {
    //     setMyname(event.target.value)
    //     // console.log(event.target.value)
    // }

    const [survey, setSurvey] = useState({
        // Basic
        gender: '',
        age: '',
        vaccination: '',
        test: false,
        testResult: '',
        whenPositive: '',
        longCovid: false,
        whenLongCovid: '',
        lastingLongCovid: '',
        // Symptoms
        neuropsychiatric: false,
        neuropsychiatricSymptoms: {
            mood: false,
            fatigue: false,
            sleepDisorder: false,
            headache: false,
            cognition: false,
            dizziness: false,
            neurologicalAbnormalities: false,
            balanceProblems: false,
        },
        gastrointestinal: false,
        gastrointestinalSymptoms: {
            abdominalPain: false,
            constipation: false,
            diarrhea: false,
            vomitingNausea: false,
        },
        cardiorespiratory: false,
        cardiorespiratorySymptoms: {
            respiratorySymptoms: false,
            sputumNasalCogestion: false,
            orthostaticIntolerance: false,
            exerciseIntolerance: false,
            chestPain: false,
            rhinorrhea: false,
            cough: false,
            soreThroat: false,
            chestTightness: false,
            variationInHeartRate: false,
            palpitations: false,
        },
        dermatologicTeguments: false,
        dermatologicTegumentsSymptoms: {
            hyperhidrosis: false,
            dermatologic: false,
            hairLoss: false,
        },
        other: false,
        othersSymptoms: {
            lossOfAppetite: false,
            alteredSmell: false,
            bodyWeightChanges: false,
            myalgiaArthralgia: false,
            alteredTaste: false,
            otalgia: false,
            ophthalmologic: false,
            swollenLymphNodes: false,
            dysphonia: false,
            fever: false,
            musculoskeletalOther: false,
            changesInMenstruation: false,
            urinarySymptoms: false,
            dysphagia: false,
            speechDisturbances: false,
        },
    })

    const { gender, age, vaccination, test, testResult, whenPositive, longCovid, whenLongCovid, lastingLongCovid } = survey
    const { neuropsychiatric, neuropsychiatricSymptoms, gastrointestinal, gastrointestinalSymptoms, cardiorespiratory, cardiorespiratorySymptoms, dermatologicTeguments, dermatologicTegumentsSymptoms, other, otherSymptoms } = survey

    // Basic
    const handleChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const toggleTestResult = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            test: e.target.checked,
            testResult: '',
            whenPositive: ''
        }))
    }
    const toggleWhenPositive = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            testResult: e.target.value,
            whenPositive: ''
        }))
    }
    const toggleWhenLastingSymptomsLongCovid = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            longCovid: e.target.checked,
            whenLongCovid: '',
            lastingLongCovid: '',
            neuropsychiatric: false,
            neuropsychiatricSymptoms: {
                mood: false,
                fatigue: false,
                sleepDisorder: false,
                headache: false,
                cognition: false,
                dizziness: false,
                neurologicalAbnormalities: false,
                balanceProblems: false,
            },
            gastrointestinal: false,
            gastrointestinalSymptoms: {
                abdominalPain: false,
                constipation: false,
                diarrhea: false,
                vomitingNausea: false,
            },
            cardiorespiratory: false,
            cardiorespiratorySymptoms: {
                respiratorySymptoms: false,
                sputumNasalCogestion: false,
                orthostaticIntolerance: false,
                exerciseIntolerance: false,
                chestPain: false,
                rhinorrhea: false,
                cough: false,
                soreThroat: false,
                chestTightness: false,
                variationInHeartRate: false,
                palpitations: false,
            },
            dermatologicTeguments: false,
            dermatologicTegumentsSymptoms: {
                hyperhidrosis: false,
                dermatologic: false,
                hairLoss: false,
            },
            other: false,
            othersSymptoms: {
                lossOfAppetite: false,
                alteredSmell: false,
                bodyWeightChanges: false,
                myalgiaArthralgia: false,
                alteredTaste: false,
                otalgia: false,
                ophthalmologic: false,
                swollenLymphNodes: false,
                dysphonia: false,
                fever: false,
                musculoskeletalOther: false,
                changesInMenstruation: false,
                urinarySymptoms: false,
                dysphagia: false,
                speechDisturbances: false,
            }
        }))
    }

    // Symptoms
    const toggleNeuropsychiatricSymptoms = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            neuropsychiatric: e.target.checked,
            neuropsychiatricSymptoms: {
                mood: false,
                fatigue: false,
                sleepDisorder: false,
                headache: false,
                cognition: false,
                dizziness: false,
                neurologicalAbnormalities: false,
                balanceProblems: false,
            }
        }))
    }
    const handleNeuropsychiatricSymptomsChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            neuropsychiatricSymptoms: {
                ...prevState.neuropsychiatricSymptoms,
                [e.target.name]: e.target.checked
            }
        }))
    }
    const toggleGastrointestinalSymptoms = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            gastrointestinal: e.target.checked,
            gastrointestinalSymptoms: {
                abdominalPain: false,
                constipation: false,
                diarrhea: false,
                vomitingNausea: false,
            }
        }))
    }
    const handleGastrointestinalSymptomsChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            gastrointestinalSymptoms: {
                ...prevState.gastrointestinalSymptoms,
                [e.target.name]: e.target.checked
            }
        }))
    }
    const toggleCardiorespiratorySymptoms = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            cardiorespiratory: e.target.checked,
            cardiorespiratorySymptoms: {
                respiratorySymptoms: false,
                sputumNasalCogestion: false,
                orthostaticIntolerance: false,
                exerciseIntolerance: false,
                chestPain: false,
                rhinorrhea: false,
                cough: false,
                soreThroat: false,
                chestTightness: false,
                variationInHeartRate: false,
                palpitations: false,
            }
        }))
    }
    const handleCardiorespiratorySymptomsChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            cardiorespiratorySymptoms: {
                ...prevState.cardiorespiratorySymptoms,
                [e.target.name]: e.target.checked
            }
        }))
    }
    const toggleDermatologicTegumentsSymptoms = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            dermatologicTeguments: e.target.checked,
            dermatologicTegumentsSymptoms: {
                hyperhidrosis: false,
                dermatologic: false,
                hairLoss: false,
            }
        }))
    }
    const handleDermatologicTegumentsSymptomsChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            dermatologicTegumentsSymptoms: {
                ...prevState.dermatologicTegumentsSymptoms,
                [e.target.name]: e.target.checked
            }
        }))
    }
    const toggleOtherSymptoms = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            other: e.target.checked,
            otherSymptoms: {
                lossOfAppetite: false,
                alteredSmell: false,
                bodyWeightChanges: false,
                myalgiaArthralgia: false,
                alteredTaste: false,
                otalgia: false,
                ophthalmologic: false,
                swollenLymphNodes: false,
                dysphonia: false,
                fever: false,
                musculoskeletalOther: false,
                changesInMenstruation: false,
                urinarySymptoms: false,
                dysphagia: false,
                speechDisturbances: false,
            }
        }))
    }
    const handleOtherSymptomsChange = (e) => {
        setSurvey(prevState => ({
            ...prevState,
            otherSymptoms: {
                ...prevState.otherSymptoms,
                [e.target.name]: e.target.checked
            }
        }))
    }

    // Data Validation and Form Submission
    const handleSubmit = (e) => {
        e.preventDefault()
        if (gender === '' || age === '' || vaccination === '') {
            alert('Please fill the Gender, Age and Vaccination items.')
            return
        }
        if (test && testResult === '') {
            alert('Please fill the Test Result item.(Positive or Negative)')
            return
        }
        if (test && testResult === 'positive' && whenPositive === '') {
            alert('Please select when you diagnosed positive.')
            return
        }
        if (longCovid && (whenLongCovid === '' || lastingLongCovid === '')) {
            alert('Please select when you experienced and how long last.')
            return
        }
        if (longCovid && !neuropsychiatric && !gastrointestinal && !cardiorespiratory && !dermatologicTeguments && !other) {
            alert('Please check one of the symptoms at least.')
            return
        }
        if (neuropsychiatric) {
            let arr = []
            for (let key in neuropsychiatricSymptoms) {
                arr.push(neuropsychiatricSymptoms[key])
            }
            let result = arr.every(ele => !ele)
            if (result) {
                alert('Please check one of the neuropsychiatric symptoms at least.')
                return
            }
        }
        if (gastrointestinal) {
            let arr = []
            for (let key in gastrointestinalSymptoms) {
                arr.push(gastrointestinalSymptoms[key])
            }
            let result = arr.every(ele => !ele)
            if (result) {
                alert('Please check one of the gastrointestinal symptoms at least.')
                return
            }
        }
        if (cardiorespiratory) {
            let arr = []
            for (let key in cardiorespiratorySymptoms) {
                arr.push(cardiorespiratorySymptoms[key])
            }
            let result = arr.every(ele => !ele)
            if (result) {
                alert('Please check one of the cardiorespiratory symptoms at least.')
                return
            }
        }
        if (dermatologicTeguments) {
            let arr = []
            for (let key in dermatologicTegumentsSymptoms) {
                arr.push(dermatologicTegumentsSymptoms[key])
            }
            let result = arr.every(ele => !ele)
            if (result) {
                alert('Please check one of the dermatologic/teguments symptoms at least.')
                return
            }
        }
        if (other) {
            let arr = []
            for (let key in otherSymptoms) {
                arr.push(otherSymptoms[key])
            }
            let result = arr.every(ele => !ele)
            if (result) {
                alert('Please check one of the other symptoms at least.')
                return
            }
        }
        console.log(gender, age, vaccination, test, testResult, whenPositive, longCovid, whenLongCovid, lastingLongCovid)
        console.log(neuropsychiatric, neuropsychiatricSymptoms)
        console.log(gastrointestinal, gastrointestinalSymptoms)
        console.log(cardiorespiratory, cardiorespiratorySymptoms)
        console.log(dermatologicTeguments, dermatologicTegumentsSymptoms)
        console.log(other, otherSymptoms)
    }

    return (
        isJoined ?
            <div className='subTitle'>You have submitted the survey. Thank you!</div>
            :
            <div className='survey'>
                {/* <input type="text"/> */}
                {/* <input type="text" value={myname}/> */}
                {/* <input type="text" value={myname} onChange={handleMyname}/> */}

                <div className='subTitle'>Please submit this survey.</div>
                <form className='surveyForm'>
                    <span><b>1. Gender</b></span>
                    <br />
                    <div onChange={handleChange}>
                        <input type="radio" name="gender" value="male" /><label>{' '}Male</label><br />
                        <input type="radio" name="gender" value="female" /><label>{' '}Female</label><br />
                    </div>
                    <br />

                    <span><b>2. International Age</b></span>
                    <br />
                    <select name="age" onChange={handleChange}>
                        <option value="">-- Select age --</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                    </select>
                    <br /><br />

                    <span><b>3. Vaccination Status</b></span>
                    <br />
                    <div onChange={handleChange}>
                        <input type="radio" name="vaccination" value="0" /><label>&nbsp;None</label><br />
                        <input type="radio" name="vaccination" value="1" /><label>&nbsp;1st dose</label><br />
                        <input type="radio" name="vaccination" value="2" /><label>&nbsp;2nd dose</label><br />
                        <input type="radio" name="vaccination" value="3" /><label>&nbsp;3rd dose</label><br />
                        <input type="radio" name="vaccination" value="4" /><label>&nbsp;4th dose</label><br />
                    </div>
                    <br />

                    <span><b>4. COVID Test Experience?</b></span>
                    &nbsp;<input type='checkbox' name='test' onChange={toggleTestResult} /><label>&nbsp;Yes</label>
                    <br />
                    {
                        test &&
                        <div onChange={toggleWhenPositive}>
                            <input type="radio" name="testResult" value="negative" /><label>&nbsp;Negative</label><br />
                            <input type="radio" name="testResult" value="positive" /><label>&nbsp;Positive</label><br />
                        </div>
                    }
                    {
                        testResult === 'positive' &&
                        <select name='whenPositive' onChange={handleChange}>
                            <option value="">--- Select when you diagnosed positive ---</option>
                            <option value="1">1 week ago</option>
                            <option value="2">2 weeks ago</option>
                            <option value="4">1 month ago</option>
                            <option value="8">2 months ago</option>
                            <option value="12">3 months ago</option>
                            <option value="16">4 months ago</option>
                            <option value="17">more than 4 months ago</option>
                        </select>
                    }
                    <br /><br />

                    {/* Need to be reworded */}
                    <span><b>5. Have you experienced/ Are you experiencing long COVID?</b></span>
                    &nbsp;<input type='checkbox' name='longCovid' onChange={toggleWhenLastingSymptomsLongCovid} /><label>&nbsp;Yes</label>
                    <br /><br />

                    {
                        longCovid &&
                        <>
                            <select name='whenLongCovid' onChange={handleChange}>
                                <option value="">--- When experienced? (approximately) ---</option>
                                <option value="1">currently experiencing</option>
                                <option value="2">2 weeks ago</option>
                                <option value="3">3 weeks ago</option>
                                <option value="4">1 months ago</option>
                                <option value="8">2 months ago</option>
                                <option value="12">3 months ago</option>
                                <option value="16">more than 4 months ago</option>
                            </select>
                            <br />
                            <select name='lastingLongCovid' onChange={handleChange}>
                                <option value="">--- Lasting period (approximately) ---</option>
                                <option value="2">2 weeks</option>
                                <option value="4">4 weeks</option>
                                <option value="6">6 weeks</option>
                                <option value="8">8 weeks</option>
                                <option value="12">12 weeks</option>
                                <option value="13">more than 12 weeks</option>
                            </select>
                            <br /><br />

                            <hr />
                            <br />
                            <div style={{ fontSize: "1.2rem" }}>Long COVID Symptoms</div>
                            <span style={{ color: "red" }}>
                                **Please select ALL the closest symptoms that you are experiencing**
                            </span>
                            <br /><br />

                            <span><b>I. Neuropsychiatric</b></span>
                            {' '}<input type="checkbox" name="neuropsychiatric" onChange={toggleNeuropsychiatricSymptoms} /><label> Yes</label>
                            <br />
                            {
                                neuropsychiatric &&
                                <div onChange={handleNeuropsychiatricSymptomsChange}>
                                    <input type="checkbox" name="mood" /><label> mood</label><br />
                                    <input type="checkbox" name="fatigue" /><label> fatigue</label><br />
                                    <input type="checkbox" name="sleepDisorder" /><label> sleep disorder</label><br />
                                    <input type="checkbox" name="headache" /><label> headache</label><br />
                                    <input type="checkbox" name="cognition" /><label> cognition</label><br />
                                    <input type="checkbox" name="dizziness" /><label> dizziness</label><br />
                                    <input type="checkbox" name="neurologicalAbnormalities" /><label> neurological abnormalities</label><br />
                                    <input type="checkbox" name="balanceProblems" /><label> balance problems</label><br />
                                </div>
                            }
                            <br />

                            <span><b>II. Gastrointestinal</b></span>
                            {' '}<input type="checkbox" name="gastrointestinal" onChange={toggleGastrointestinalSymptoms} /><label> Yes</label>
                            <br />
                            {
                                gastrointestinal &&
                                <div onChange={handleGastrointestinalSymptomsChange}>
                                    <input type="checkbox" name="abdominalPain" /><label> abdominal pain</label><br />
                                    <input type="checkbox" name="constipation" /><label> constipation</label><br />
                                    <input type="checkbox" name="diarrhea" /><label> diarrhea</label><br />
                                    <input type="checkbox" name="vomitingNausea" /><label> vomiting/nausea</label><br />
                                </div>
                            }
                            <br />

                            <span><b>III. Cardiorespiratory</b></span>
                            {' '}<input type="checkbox" name="cardiorespiratory" onChange={toggleCardiorespiratorySymptoms} /><label> Yes</label>
                            <br />
                            {
                                cardiorespiratory &&
                                <div onChange={handleCardiorespiratorySymptomsChange}>
                                    <input type="checkbox" name="respiratorySymptoms" /><label> respiratory symptoms</label><br />
                                    <input type="checkbox" name="sputumNasalCogestion" /><label> sputum/nasal cogestion</label><br />
                                    <input type="checkbox" name="orthostaticIntolerance" /><label> orthostatic intolerance</label><br />
                                    <input type="checkbox" name="exerciseIntolerance" /><label> exercise intolerance</label><br />
                                    <input type="checkbox" name="chestPain" /><label> chest pain</label><br />
                                    <input type="checkbox" name="rhinorrhea" /><label> rhinorrhea</label><br />
                                    <input type="checkbox" name="cough" /><label> cough</label><br />
                                    <input type="checkbox" name="soreThroat" /><label> sore throat</label><br />
                                    <input type="checkbox" name="chestTightness" /><label> chest tightness</label><br />
                                    <input type="checkbox" name="variationInHeartRate" /><label> variation in heart rate</label><br />
                                    <input type="checkbox" name="palpitations" /><label> palpitations</label><br />
                                </div>
                            }
                            <br />

                            <span><b>IV. Dermatologic / Teguments</b></span>
                            {' '}<input type="checkbox" name="dermatologicTeguments" onChange={toggleDermatologicTegumentsSymptoms} /><label> Yes</label>
                            <br />
                            {
                                dermatologicTeguments &&
                                <div onChange={handleDermatologicTegumentsSymptomsChange}>
                                    <input type="checkbox" name="hyperhidrosis" /><label> hyperhidrosis</label><br />
                                    <input type="checkbox" name="dermatologic" /><label> dermatologic</label><br />
                                    <input type="checkbox" name="hairLoss" /><label> hair loss</label><br />
                                </div>
                            }
                            <br />

                            <span><b>V. Others...</b></span>
                            {' '}<input type="checkbox" name="other" onChange={toggleOtherSymptoms} /> <label> Yes</label>
                            <br />
                            {
                                other &&
                                <div onChange={handleOtherSymptomsChange}>
                                    <input type="checkbox" name="lossOfAppetite" /><label> loss of appetite</label><br />
                                    <input type="checkbox" name="alteredSmell" /><label> altered smell</label><br />
                                    <input type="checkbox" name="bodyWeightChanges" /><label> bodyWeightChanges</label><br />
                                    <input type="checkbox" name="myalgiaArthralgia" /><label> myalgia/arthralgia</label><br />
                                    <input type="checkbox" name="alteredTaste" /><label> alteredTaste</label><br />
                                    <input type="checkbox" name="otalgia" /><label> otalgia</label><br />
                                    <input type="checkbox" name="ophthalmologic" /><label> ophthalmologic</label><br />
                                    <input type="checkbox" name="swollenLymphNodes" /><label> swollenLymphNodes</label><br />
                                    <input type="checkbox" name="dysphonia" /><label> dysphonia</label><br />
                                    <input type="checkbox" name="fever" /><label> fever</label><br />
                                    <input type="checkbox" name="musculoskeletalOther" /><label> musculoskeletalOther</label><br />
                                    <input type="checkbox" name="changesInMenstruation" /><label> changes in menstruation</label><br />
                                    <input type="checkbox" name="urinarySymptoms" /><label> urinarySymptoms</label><br />
                                    <input type="checkbox" name="dysphagia" /><label> dysphagia</label><br />
                                    <input type="checkbox" name="speechDisturbances" /><label> speechDisturbances</label><br />
                                </div>
                            }
                        </>
                    }

                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
    )
}

export default Survey