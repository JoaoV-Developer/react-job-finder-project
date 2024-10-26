import React from "react"

// Each option created in this component will automatically loaded as an option in the form dropdown

const salaryOption = [
    'Under $50K',
    "$50K - 60K",
    "$60K - 70K",
    "$70K - 80K",
    "$90K - 100K",
    "$100K - 125K",
    "$125K - 150K",
    "$150K - 175K",
    "$175K - 200K",
    "Over $200K",
    "Infnite"
]

const jobTypeOption = [
    'Full-time',
    "Part-time",
    "Remote",
    "Internship",
    "Voluntary"
]

const SalaryOptions = () => {
    return (
        salaryOption.map( (salary, index) => (<option key={index} value={salary}>{salary}</option>))
    )
}

const JobTypeOptions = () => {
    return (
        jobTypeOption.map( (type, index) => (<option key={index} value={type}>{type}</option>))
    )
}


export {SalaryOptions, JobTypeOptions}