import '../css/survey.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// import server from '../configs/serverConfig'


const Survey = ({ isLogged, isJoined, userId, username, handleJoin }) => {
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
        },
    })
    const navigate = useNavigate()

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
    const handleSubmit = async (e) => {
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
        // console.log(gender, age, vaccination, test, testResult, whenPositive, longCovid, whenLongCovid, lastingLongCovid)
        // console.log(neuropsychiatric, neuropsychiatricSymptoms)
        // console.log(gastrointestinal, gastrointestinalSymptoms)
        // console.log(cardiorespiratory, cardiorespiratorySymptoms)
        // console.log(dermatologicTeguments, dermatologicTegumentsSymptoms)
        // console.log(other, otherSymptoms)

        // console.log(server[process.env.NODE_ENV]) // <<<<<<<<<
        const newSurvey = {
            /* Basic */
            gender, // gender: ''
            age, // age: ''
            vaccination, // vaccination: ''
            /* Test */
            test, // test: false
            testResult, // testResult: ''
            whenPositive, // whenPositive: ''
            /* Long Covid */
            longCovid, // longCovid: false
            whenLongCovid, // whenLongCovid: '',
            lastingLongCovid, // lastingLongCovid: '',
            /* Neuropsychiatric Symptoms */
            neuropsychiatric, // neuropsychiatric: false,
            mood: neuropsychiatricSymptoms.mood, // mood: false,
            fatigue: neuropsychiatricSymptoms.fatigue, // fatigue: false,
            sleepDisorder: neuropsychiatricSymptoms.sleepDisorder, // sleepDisorder: false,
            headache: neuropsychiatricSymptoms.headache, // headache: false,
            cognition: neuropsychiatricSymptoms.cognition, // cognition: false,
            dizziness: neuropsychiatricSymptoms.dizziness, // dizziness: false,
            neurologicalAbnormalities: neuropsychiatricSymptoms.neurologicalAbnormalities, // neurologicalAbnormalities: false,
            balanceProblems: neuropsychiatricSymptoms.balanceProblems, // balanceProblems: false,
            /* Gastrointestinal Symptoms */
            gastrointestinal, // gastrointestinal: false,
            abdominalPain: gastrointestinalSymptoms.abdominalPain, // abdominalPain: false,
            constipation: gastrointestinalSymptoms.constipation, // constipation: false,
            diarrhea: gastrointestinalSymptoms.diarrhea, // diarrhea: false,
            vomitingNausea: gastrointestinalSymptoms.vomitingNausea, // vomitingNausea: false,
            /* Cardiorespiratory Symptoms */
            cardiorespiratory, // cardiorespiratory: false,
            respiratorySymptoms: cardiorespiratorySymptoms.respiratorySymptoms, // respiratorySymptoms: false,
            sputumNasalCogestion: cardiorespiratorySymptoms.sputumNasalCogestion, // sputumNasalCogestion: false,
            orthostaticIntolerance: cardiorespiratorySymptoms.orthostaticIntolerance, // orthostaticIntolerance: false,
            exerciseIntolerance: cardiorespiratorySymptoms.exerciseIntolerance, // exerciseIntolerance: false,
            chestPain: cardiorespiratorySymptoms.chestPain, // chestPain: false,
            rhinorrhea: cardiorespiratorySymptoms.rhinorrhea, // rhinorrhea: false,
            cough: cardiorespiratorySymptoms.cough, // cough: false,
            soreThroat: cardiorespiratorySymptoms.soreThroat, // soreThroat: false,
            chestTightness: cardiorespiratorySymptoms.chestTightness, // chestTightness: false,
            variationInHeartRate: cardiorespiratorySymptoms.variationInHeartRate, // variationInHeartRate: false,
            palpitations: cardiorespiratorySymptoms.palpitations, // palpitations: false,
            /* Dermatologic Teguments Symptoms */
            dermatologicTeguments, // dermatologicTeguments: false,
            hyperhidrosis: dermatologicTegumentsSymptoms.hyperhidrosis, // hyperhidrosis: false,
            dermatologic: dermatologicTegumentsSymptoms.dermatologic, // dermatologic: false,
            hairLoss: dermatologicTegumentsSymptoms.hairLoss, // hairLoss: false,
            /* Other Symptoms */
            other, // other: false,
            lossOfAppetite: otherSymptoms.lossOfAppetite, // lossOfAppetite: false,
            alteredSmell: otherSymptoms.alteredSmell, // alteredSmell: false,
            bodyWeightChanges: otherSymptoms.bodyWeightChanges, // bodyWeightChanges: false,
            myalgiaArthralgia: otherSymptoms.myalgiaArthralgia, // myalgiaArthralgia: false,
            alteredTaste: otherSymptoms.alteredTaste, // alteredTaste: false,
            otalgia: otherSymptoms.otalgia, // otalgia: false,
            ophthalmologic: otherSymptoms.ophthalmologic, // ophthalmologic: false,
            swollenLymphNodes: otherSymptoms.swollenLymphNodes, // swollenLymphNodes: false,
            dysphonia: otherSymptoms.dysphonia, // dysphonia: false,
            fever: otherSymptoms.fever, // fever: false,
            musculoskeletalOther: otherSymptoms.musculoskeletalOther, // musculoskeletalOther: false,
            changesInMenstruation: otherSymptoms.changesInMenstruation, // changesInMenstruation: false,
            urinarySymptoms: otherSymptoms.urinarySymptoms, // urinarySymptoms: false,
            dysphagia: otherSymptoms.dysphagia, // dysphagia: false,
            speechDisturbances: otherSymptoms.speechDisturbances, // speechDisturbances: false,
        }

        const res = await axios.post(`/api/survey`, newSurvey )
        // console.log(res.data) // <<<<<<<<<
        if (res.data.surveyId) {
            handleJoin(true)
            navigate('/survey')
        }
    }

    const handleDelete = async () => {
        const res = await axios.delete(`/api/survey`)
        if (res.status === 200 && res.data.message === 'OK') {
            handleJoin(false)
            navigate('/survey')
        }
    }

    if (!isLogged) {
        return (
            <div className='subTitle'>You need to login.<br />로그인이 필요합니다.</div>
        )
    }

    return (
        isJoined 
            ?
            <div style={{ margin: '5%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='subTitle'>You have submitted the survey. Thank you!<br />설문조사 제출을 완료하였습니다. 감사합니다!</div>
                <br />
                <div>
                    If you want to rewrite this form, please
                    <button style={{ color: 'red', border: 'none', background: 'none', textDecoration: 'underline' }} onClick={handleDelete}>delete 지우고 다시 작성</button>
                    and submit again.
                </div>
            </div>
            :
            <div className='survey'>
                <div className='subTitle'>Please submit this survey.<br />설문 조사를 작성하여 제출해주시기 바랍니다.</div>
                User Name 작성자: { username.substring(0, username.length / 2) + '***' }
                <form className='surveyForm'>
                    <span><b>1. Gender 성별</b></span>
                    <br />
                    <div onChange={handleChange}>
                        <input type="radio" name="gender" value="male" /><label>{' '}Male 남성</label><br />
                        <input type="radio" name="gender" value="female" /><label>{' '}Female 여성</label><br />
                    </div>
                    <br />

                    <span><b>2. International Age 만 나이</b></span>
                    <br />
                    <select name="age" onChange={handleChange}>
                        <option value="">-- Select age 나이 --</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                    </select>
                    <br /><br />

                    <span><b>3. Vaccination Status 백신 접종</b></span>
                    <br />
                    <div onChange={handleChange}>
                        <input type="radio" name="vaccination" value="0" /><label>&nbsp;None 미접종</label><br />
                        <input type="radio" name="vaccination" value="1" /><label>&nbsp;1st dose 1차</label><br />
                        <input type="radio" name="vaccination" value="2" /><label>&nbsp;2nd dose 2차</label><br />
                        <input type="radio" name="vaccination" value="3" /><label>&nbsp;3rd dose 3차</label><br />
                        <input type="radio" name="vaccination" value="4" /><label>&nbsp;4th dose 4차</label><br />
                    </div>
                    <br />

                    <span><b>4. COVID Test Experience 코로나 검사 경험여부</b></span>
                    &nbsp;<input type='checkbox' name='test' onChange={toggleTestResult} /><label>&nbsp;Yes 경험 있음</label>
                    <br />
                    {
                        test &&
                        <div onChange={toggleWhenPositive}>
                            <input type="radio" name="testResult" value="negative" /><label>&nbsp;Negative 음성</label><br />
                            <input type="radio" name="testResult" value="positive" /><label>&nbsp;Positive 양성</label><br />
                        </div>
                    }
                    {
                        testResult === 'positive' &&
                        <select name='whenPositive' onChange={handleChange}>
                            <option value="">--- Select when you diagnosed positive 양성 판정 시기 ---</option>
                            <option value="1">1 week ago 1주 전</option>
                            <option value="2">2 weeks ago 2주 전</option>
                            <option value="4">1 month ago 1달 전</option>
                            <option value="8">2 months ago 2달 전</option>
                            <option value="12">3 months ago 3달 전</option>
                            <option value="16">4 months ago 4달 전</option>
                            <option value="17">more than 4 months ago 4달이상 전</option>
                        </select>
                    }
                    <br /><br />

                    {/* Need to be reworded */}
                    <span><b>5. Long Covid Experience 코로나 후유증 경험여부</b></span>
                    &nbsp;<input type='checkbox' name='longCovid' onChange={toggleWhenLastingSymptomsLongCovid} /><label>&nbsp;Yes 경험 있음</label>
                    <br /><br />

                    {
                        longCovid &&
                        <>
                            <select name='whenLongCovid' onChange={handleChange}>
                                <option value="">--- When experienced? 언제(approximately 대략) ---</option>
                                <option value="1">currently experiencing 현재 경험 중</option>
                                <option value="2">2 weeks ago 2주 전</option>
                                <option value="3">3 weeks ago 3주 전</option>
                                <option value="4">1 months ago 1달 전</option>
                                <option value="8">2 months ago 2달 전</option>
                                <option value="12">3 months ago 3달 전</option>
                                <option value="16">more than 4 months ago 4달이상 전</option>
                            </select>
                            <br /><br />
                            <select name='lastingLongCovid' onChange={handleChange}>
                                <option value="">--- Lasting period 지속 기간(approximately 대략) ---</option>
                                <option value="2">2 weeks 2주</option>
                                <option value="4">4 weeks 4주</option>
                                <option value="6">6 weeks 6주</option>
                                <option value="8">8 weeks 8주</option>
                                <option value="12">12 weeks 12주</option>
                                <option value="13">more than 12 weeks 12주 이상</option>
                            </select>
                            <br /><br />

                            <hr />
                            <br />
                            <div style={{ fontSize: "1.2rem" }}>Long COVID Symptoms 코로나 후유증 증상</div>
                            <span style={{ color: "red" }}>
                                **Please select ALL the closest symptoms that you are experiencing**
                                <br />
                                **해당되는 증상들을 모두 선택해주세요**
                            </span>
                            <br /><br />

                            <span><b>I. Neuropsychiatric 신경 및 정신적</b></span>
                            {' '}<input type="checkbox" name="neuropsychiatric" onChange={toggleNeuropsychiatricSymptoms} /><label> Yes 경험 있음</label>
                            <br />
                            {
                                neuropsychiatric &&
                                <div onChange={handleNeuropsychiatricSymptomsChange}>
                                    <input type="checkbox" name="mood" /><label> mood 기분변화</label><br />
                                    <input type="checkbox" name="fatigue" /><label> fatigue 피로</label><br />
                                    <input type="checkbox" name="sleepDisorder" /><label> sleep disorder 수면장애</label><br />
                                    <input type="checkbox" name="headache" /><label> headache 두통</label><br />
                                    <input type="checkbox" name="cognition" /><label> cognition 인식/인지</label><br />
                                    <input type="checkbox" name="dizziness" /><label> dizziness 어지러움</label><br />
                                    <input type="checkbox" name="neurologicalAbnormalities" /><label> neurological abnormalities 신경계 질환</label><br />
                                    <input type="checkbox" name="balanceProblems" /><label> balance problems 균형 기능 장애</label><br />
                                </div>
                            }
                            <br />

                            <span><b>II. Gastrointestinal 위장 및 소화기관</b></span>
                            {' '}<input type="checkbox" name="gastrointestinal" onChange={toggleGastrointestinalSymptoms} /><label> Yes 경험 있음</label>
                            <br />
                            {
                                gastrointestinal &&
                                <div onChange={handleGastrointestinalSymptomsChange}>
                                    <input type="checkbox" name="abdominalPain" /><label> abdominal pain 복통</label><br />
                                    <input type="checkbox" name="constipation" /><label> constipation 변비</label><br />
                                    <input type="checkbox" name="diarrhea" /><label> diarrhea 설사</label><br />
                                    <input type="checkbox" name="vomitingNausea" /><label> vomiting/nausea 구토/메스꺼움</label><br />
                                </div>
                            }
                            <br />

                            <span><b>III. Cardiorespiratory 심장 및 호흡기</b></span>
                            {' '}<input type="checkbox" name="cardiorespiratory" onChange={toggleCardiorespiratorySymptoms} /><label> Yes 경험 있음</label>
                            <br />
                            {
                                cardiorespiratory &&
                                <div onChange={handleCardiorespiratorySymptomsChange}>
                                    <input type="checkbox" name="respiratorySymptoms" /><label> respiratory symptoms 호흡 질환</label><br />
                                    <input type="checkbox" name="sputumNasalCogestion" /><label> sputum/nasal cogestion 가래/코막힘</label><br />
                                    <input type="checkbox" name="orthostaticIntolerance" /><label> orthostatic intolerance 기립성 불내증</label><br />
                                    <input type="checkbox" name="exerciseIntolerance" /><label> exercise intolerance 운동 불내성</label><br />
                                    <input type="checkbox" name="chestPain" /><label> chest pain 가슴 통증</label><br />
                                    <input type="checkbox" name="rhinorrhea" /><label> rhinorrhea 콧물</label><br />
                                    <input type="checkbox" name="cough" /><label> cough 기침</label><br />
                                    <input type="checkbox" name="soreThroat" /><label> sore throat 목아품</label><br />
                                    <input type="checkbox" name="chestTightness" /><label> chest tightness가습 답답함</label><br />
                                    <input type="checkbox" name="variationInHeartRate" /><label> variation in heart rate 심박동수 변이</label><br />
                                    <input type="checkbox" name="palpitations" /><label> palpitations 심계항진 (두근거림)</label><br />
                                </div>
                            }
                            <br />

                            <span><b>IV. Dermatologic / Teguments 피부/외피</b></span>
                            {' '}<input type="checkbox" name="dermatologicTeguments" onChange={toggleDermatologicTegumentsSymptoms} /><label> Yes 경험 있음</label>
                            <br />
                            {
                                dermatologicTeguments &&
                                <div onChange={handleDermatologicTegumentsSymptomsChange}>
                                    <input type="checkbox" name="hyperhidrosis" /><label> hyperhidrosis 다한증</label><br />
                                    <input type="checkbox" name="dermatologic" /><label> dermatologic 피부 질환</label><br />
                                    <input type="checkbox" name="hairLoss" /><label> hair loss 머리카락 빠짐</label><br />
                                </div>
                            }
                            <br />

                            <span><b>V. Others 기타 증상</b></span>
                            {' '}<input type="checkbox" name="other" onChange={toggleOtherSymptoms} /> <label> Yes 경험 있음</label>
                            <br />
                            {
                                other &&
                                <div onChange={handleOtherSymptomsChange}>
                                    <input type="checkbox" name="lossOfAppetite" /><label> loss of appetite 식욕 부진</label><br />
                                    <input type="checkbox" name="alteredSmell" /><label> altered smell 후각 변화</label><br />
                                    <input type="checkbox" name="bodyWeightChanges" /><label> body weight changes 체중 변화</label><br />
                                    <input type="checkbox" name="myalgiaArthralgia" /><label> myalgia/arthralgia 근육통/관절통</label><br />
                                    <input type="checkbox" name="alteredTaste" /><label> altered taste 미각 변화</label><br />
                                    <input type="checkbox" name="otalgia" /><label> otalgia 귀 통증</label><br />
                                    <input type="checkbox" name="ophthalmologic" /><label> ophthalmologic 눈 질병</label><br />
                                    <input type="checkbox" name="swollenLymphNodes" /><label> swollen lymph nodes 부은 림프절</label><br />
                                    <input type="checkbox" name="dysphonia" /><label> dysphonia 발성 장애</label><br />
                                    <input type="checkbox" name="fever" /><label> fever 열</label><br />
                                    <input type="checkbox" name="musculoskeletalOther" /><label> musculoskeletal other 근골격과 관련된 다른 질환</label><br />
                                    <input type="checkbox" name="changesInMenstruation" /><label> changes in menstruation 생리 불순</label><br />
                                    <input type="checkbox" name="urinarySymptoms" /><label> urinary symptoms 비뇨기 질환</label><br />
                                    <input type="checkbox" name="dysphagia" /><label> dysphagia 삼킴 곤란(삼키는데 어려움을 겪는 증상)</label><br />
                                    <input type="checkbox" name="speechDisturbances" /><label> speech disturbances 말소리 장애</label><br />
                                </div>
                            }
                        </>
                    }
                    <br /><br />
                    <button style={{ color: 'blue' }} onClick={handleSubmit}>Submit 제출</button>
                </form>
            </div>
    )
}

export default Survey