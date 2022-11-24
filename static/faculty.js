function getFaculty() {
    fetch("http://82.180.133.132:8000/facultyinfo/")
    .then(res => {
        return res.json();
    })
    .then(res => {
        showFaculty(res)
    })
}

function showFaculty(faculty) {
    let card = ""
    card += `<div class="facultyInfoCards">
    <div class="facultyCardWrapper">
        <div class="facultyCard">
            <div class="imageSection">
                <img class="facultyImage" src="http://82.180.133.132:8000/media/${faculty.img}" alt="faculty image" srcset="">
            </div>
            <div class="cardSection">
                <div class="facultyName">
                    <h3>faculty name (HOD)</h3>
                </div>
                <div class="facultyInfo">
                    <div class="facutlyInfoItem">
                        <span class="itemHeading">
                            <h5>Qualification :</h5>
                        </span>
                        <span class="itemText">
                            btech,mtech
                        </span>
                    </div>
                    <div class="facutlyInfoItem">
                        <span class="itemHeading">
                            <h5>Area of Interest :</h5>
                        </span>
                        <span class="itemText">
                            Biometric
                        </span>
                    </div>
                    <div class="facutlyInfoItem">
                        <span class="itemHeading">
                            <h5>Mobile No. :</h5>
                        </span>
                        <span class="itemText">
                            <a href="tel:+452348920834786">452348920834786</a>
                        </span>
                    </div>
                    <div class="facutlyInfoItem">
                        <span class="itemHeading">
                            <h5>Email id. :</h5>
                        </span>
                        <span class="itemText">
                            <a href="mailto:abcd.it@recb.ac.in">abcd.it@recb.ac.in</a>
                        </span>
                    </div>
                    <div class="facutlyInfoItem">
                        <span class="itemHeading">
                            <h5>Office :</h5>
                        </span>
                        <span class="itemText">
                            <address>near TEQIP-III</address>
                        </span>
                    </div>
                </div>

            </div>
        </div>
        <div class="facultyLink">
            <h1>read more</h1>
        </div>
    </div>`
}


