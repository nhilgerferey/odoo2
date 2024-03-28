/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";
import { StudentLine } from "@tetras_school_management/app/screens/students/student_list/student_line/student_line";
export class StudentListScreen extends Component {
    static template = "tetras_school_management.StudentListScreen";
    static components = { StudentLine };


    setup() {
        this.tetras = useTetras();
        this.state = useState({
            studentName: ''
        });
    }

    async onStudentClick(student) {
        this.tetras.showScreen("StudentFormScreen", {"student": student})
    }

    async onStudentCreate(ev){
        const name = this.state.studentName;


        if(name){
        const student = {
            name: name,
            classroom_id: [],
            grade_ids: []
        }

        console.log(student);
        await this.tetras.orm.call("tetras.student", "create_student", [student]);

        this.tetras.load_server_data();

        }
    }
}

registry.category("tetras_screens").add("StudentListScreen", StudentListScreen);
