/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";

export class StudentFormScreen extends Component {
    static template = "tetras_school_management.StudentFormScreen";

    setup() {
        this.tetras = useTetras();
    }

    async send() {
        await this.tetras.orm.call("tetras.student", "write_student", [this.props.student.id, this.props.student]);
    }

}

registry.category("tetras_screens").add("StudentFormScreen", StudentFormScreen);
