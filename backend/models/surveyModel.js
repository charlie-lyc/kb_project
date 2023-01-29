module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Survey', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        /* Basic */
        gender: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // gender: ''
        age: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // age: ''
        vaccination: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // vaccination: ''
        /* Test */
        test: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // test: false
        testResult: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // testResult: ''
        whenPositive: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // whenPositive: ''
        /* Long Covid */
        longCovid: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // longCovid: false
        whenLongCovid: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // whenLongCovid: '',
        lastingLongCovid: { 
            type: DataTypes.STRING, 
            allowNull: false 
        }, // lastingLongCovid: '',
        /* Neuropsychiatric Symptoms */
        neuropsychiatric: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // neuropsychiatric: false,
        mood: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // mood: false,
        fatigue: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // fatigue: false,
        sleepDisorder: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // sleepDisorder: false,
        headache: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // headache: false,
        cognition: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // cognition: false,
        dizziness: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // dizziness: false,
        neurologicalAbnormalities: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // neurologicalAbnormalities: false,
        balanceProblems: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // balanceProblems: false,
        /* Gastrointestinal Symptoms */
        gastrointestinal: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // gastrointestinal: false,
        abdominalPain: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // abdominalPain: false,
        constipation: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // constipation: false,
        diarrhea: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // diarrhea: false,
        vomitingNausea: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // vomitingNausea: false,
        /* Cardiorespiratory Symptoms */
        cardiorespiratory: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // cardiorespiratory: false,
        respiratorySymptoms: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // respiratorySymptoms: false,
        sputumNasalCogestion: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // sputumNasalCogestion: false,
        orthostaticIntolerance: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // orthostaticIntolerance: false,
        exerciseIntolerance: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // exerciseIntolerance: false,
        chestPain: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // chestPain: false,
        rhinorrhea: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // rhinorrhea: false,
        cough: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // cough: false,
        soreThroat: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // soreThroat: false,
        chestTightness: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // chestTightness: false,
        variationInHeartRate: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // variationInHeartRate: false,
        palpitations: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // palpitations: false,
        /* Dermatologic Teguments Symptoms */
        dermatologicTeguments: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // dermatologicTeguments: false,
        hyperhidrosis: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // hyperhidrosis: false,
        dermatologic: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // dermatologic: false,
        hairLoss: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // hairLoss: false,
        /* Other Symptoms */
        other: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // other: false,
        lossOfAppetite: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // lossOfAppetite: false,
        alteredSmell: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // alteredSmell: false,
        bodyWeightChanges: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // bodyWeightChanges: false,
        myalgiaArthralgia: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // myalgiaArthralgia: false,
        alteredTaste: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // alteredTaste: false,
        otalgia: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // otalgia: false,
        ophthalmologic: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // ophthalmologic: false,
        swollenLymphNodes: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // swollenLymphNodes: false,
        dysphonia: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // dysphonia: false,
        fever: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false 
        }, // fever: false,
        musculoskeletalOther: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // musculoskeletalOther: false,
        changesInMenstruation: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // changesInMenstruation: false,
        urinarySymptoms: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // urinarySymptoms: false,
        dysphagia: { 
            type: DataTypes.BOOLEAN, 
            allowNull: false
        }, // dysphagia: false,
        speechDisturbances: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }, // speechDisturbances: false,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn("NOW")
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.fn("NOW")
        },
    }, 
    {
        timestamps: true,
    })
}
