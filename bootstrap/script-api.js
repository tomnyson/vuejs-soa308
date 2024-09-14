/*
 tạo 1 mảng ds sinh viên (hinh, mssv, tên) -> 12 item
 render list list ra bằng bootstrap 1 row 4 item
 https://www.w3schools.com/bootstrap5/bootstrap_cards.php
*/
const dsSinhVien = [
    {
        mssv: 'pk001',
        name: "Lê Hồng Sơn 1",
        picture: 'https://picsum.photos/200/300'
    },
    {
        mssv: 'pk002',
        name: "Lê Hồng Sơn 2",
        picture: 'https://picsum.photos/200/300'
    },
    {
        mssv: 'pk003',
        name: "Lê Hồng Sơn 3",
        picture: 'https://picsum.photos/200/300'
    }
    ,
    {
        mssv: 'pk004',
        name: "Lê Hồng Sơn 4",
        picture: 'https://picsum.photos/200/300'
    }
]

async function getStudents() {
    const url = "http://localhost:3000/students";
    try {
      const response = await fetch(url);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error.message);
    }
}

async function insertStudents(student) {
    const url = "http://localhost:3000/students";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(student)
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      return true
    } catch (error) {
      console.error(error.message);
    }
}

const renderPostList = async () => {
    const students = await getStudents()
    console.log(students)
    const elmDanhSach = document.getElementById('sinhvien')
    let result = "";
    for(const item of students) {
        result+= `
                <div class="col-md-3">
          <div class="card" style="width:20rem;margin:20px 0 24px 0">
            <img class="card-img-top" src="${item.picture}" alt="image" style="width:100%" />
            <div class="card-body">
              <h4 class="card-title">${item.name}</h4>
              <p class="card-text">
              ${item.name}
              </p>
              <a href="javascript:void(0)" class="btn btn-primary">See Profile</a>
                <a href="javascript:void(0)" onclick="removeStudent('${item.mssv}')" class="btn btn-danger"><i class="bi bi-trash3"></i></a>
                <a href="javascript:void(0)" class="btn btn-info"> 
                <i class="bi bi-pencil"></i>
                </a>
            </div>
          </div>
        </div>
        `
    }
    elmDanhSach.innerHTML = result
}

renderPostList()

const elmBtnCreate = document.getElementById('btnCreate')
elmBtnCreate.addEventListener('click', async () => {
    const mssv = document.getElementById('mssv').value;
    const sv_name = document.getElementById('sv-name').value;
    const sv_picture = document.getElementById('sv-picture').value;
    console.log("mssv",mssv.trim().length)
    if (mssv.trim().length <= 0) { 
        alert('Please enter mssv');
        return
    } else if (sv_name.trim().length <= 0) { 
        alert('Please enter sv_name');
        return
    } else if (sv_picture.trim().length <= 0) { 
        alert('Please enter sv_picture');
        return
    } 
    const newSinhVien = {
        mssv: mssv,
        name: sv_name,
        picture: sv_picture
    }
    const isInsert = await insertStudents(newSinhVien)
    if(isInsert) {
        alert('thêm student thành công');
        renderPostList()
    }
    console.log("isInsert",isInsert)
  
    // lam viec o day
});

const removeStudent = (id) => {
    let vitri=-1
    for(let i = 0; i < dsSinhVien.length; i++) {
        console.log(dsSinhVien[i])
        if(dsSinhVien[i].mssv==id){
            vitri=i
            dsSinhVien.splice(i,1)

        }

    }
    renderPostList()
    console.log(dsSinhVien[i])
}