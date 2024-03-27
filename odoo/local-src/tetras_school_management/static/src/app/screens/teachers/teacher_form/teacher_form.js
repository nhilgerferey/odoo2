/** @odoo-module */

import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { useTetras } from "@tetras_school_management/app/store/tetras_hook";

export class TeacherFormScreen extends Component {
    static template = "tetras_school_management.TeacherFormScreen";

    setup() {
        this.tetras = useTetras();
    }

    async send() {
        await this.tetras.orm.call("tetras.teacher", "write_teacher", [this.props.teacher.id, this.props.teacher]);
    }

}

registry.category("tetras_screens").add("TeacherFormScreen", TeacherFormScreen);
