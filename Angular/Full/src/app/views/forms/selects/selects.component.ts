import {Component, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {ChoiceSelectInputDirective} from '@core/directive/choices-select.directive';
import {NgIcon} from '@ng-icons/core';
import {TagifyModule, TagifyService, type TagifySettings} from 'ngx-tagify';
import {Select2Data, Select2} from 'ng-select2-component';


@Component({
    selector: 'app-selects',
    imports: [PageTitleComponent, UiCardComponent, ChoiceSelectInputDirective, NgIcon, TagifyModule, FormsModule, Select2],
    templateUrl: './selects.component.html',
    styles: ``
})
export class SelectsComponent {
    constructor(private tagifyService: TagifyService) {}
    data: Select2Data = [
        {
            label: 'Alaskan/Hawaiian Time Zone',
            options: [
                {value: 'AK', label: 'Alaska'},
                {value: 'HI', label: 'Hawaii', disabled: true},
            ],
        },
        {
            label: 'Pacific Time Zone',
            options: [
                {value: 'CA', label: 'California'},
                {value: 'NV', label: 'Nevada'},
                {value: 'OR', label: 'Oregon'},
                {value: 'WA', label: 'Washington'},
            ],
        },
        {
            label: 'Mountain Time Zone',
            options: [
                {value: 'AZ', label: 'Arizona'},
                {value: 'CO', label: 'Colorado'},
                {value: 'ID', label: 'Idaho'},
                {value: 'MT', label: 'Montana'},
                {value: 'NE', label: 'Nebraska'},
                {value: 'NM', label: 'New Mexico'},
                {value: 'ND', label: 'North Dakota'},
                {value: 'UT', label: 'Utah'},
                {value: 'WY', label: 'Wyoming'},
            ],
        },
        {
            label: 'Central Time Zone',
            options: [
                {value: 'AL', label: 'Alabama'},
                {value: 'AR', label: 'Arkansas'},
                {value: 'IL', label: 'Illinois'},
                {value: 'IA', label: 'Iowa'},
                {value: 'KS', label: 'Kansas'},
                {value: 'KY', label: 'Kentucky'},
                {value: 'LA', label: 'Louisiana'},
                {value: 'MN', label: 'Minnesota'},
                {value: 'MS', label: 'Mississippi'},
                {value: 'MO', label: 'Missouri'},
                {value: 'OK', label: 'Oklahoma'},
                {value: 'SD', label: 'South Dakota'},
                {value: 'TX', label: 'Texas'},
                {value: 'TN', label: 'Tennessee'},
                {value: 'WI', label: 'Wisconsin'},
            ],
        },
        {
            label: 'Eastern Time Zone',
            options: [
                {value: 'CT', label: 'Connecticut'},
                {value: 'DE', label: 'Delaware'},
                {value: 'FL', label: 'Florida'},
                {value: 'GA', label: 'Georgia'},
                {value: 'IN', label: 'Indiana'},
                {value: 'ME', label: 'Maine'},
                {value: 'MD', label: 'Maryland'},
                {value: 'MA', label: 'Massachusetts'},
                {value: 'MI', label: 'Michigan'},
                {value: 'NH', label: 'New Hampshire'},
                {value: 'NJ', label: 'New Jersey'},
                {value: 'NY', label: 'New York'},
                {value: 'NC', label: 'North Carolina'},
                {value: 'OH', label: 'Ohio'},
                {value: 'PA', label: 'Pennsylvania'},
                {value: 'RI', label: 'Rhode Island'},
                {value: 'SC', label: 'South Carolina'},
                {value: 'VT', label: 'Vermont'},
                {value: 'VA', label: 'Virginia'},
                {value: 'WV', label: 'West Virginia'},
            ],
        },
    ];

    whitelist = ["A# .NET", "A# (Axiom)", "A-0 System", "A+", "A++", "ABAP", "ABC", "ABC ALGOL", "ABSET", "ABSYS", "ACC", "Accent", "Ace DASL", "ACL2", "Avicsoft", "ACT-III", "Action!", "ActionScript", "Ada", "Adenine", "Agda", "Agilent VEE", "Agora", "AIMMS", "Alef", "ALF", "ALGOL 58", "ALGOL 60", "ALGOL 68", "ALGOL W", "Alice", "Alma-0", "AmbientTalk", "Amiga E", "AMOS", "AMPL", "Apex (Salesforce.com)", "APL", "AppleScript", "Arc", "ARexx", "Argus", "AspectJ", "Assembly language", "ATS", "Ateji PX", "AutoHotkey", "Autocoder", "AutoIt", "AutoLISP / Visual LISP", "Averest", "AWK", "Axum", "Active Server Pages", "ASP.NET", "B", "Babbage", "Bash", "BASIC", "bc", "BCPL", "BeanShell", "Batch (Windows/Dos)", "Bertrand", "BETA", "Bigwig", "Bistro", "BitC", "BLISS", "Blockly", "BlooP", "Blue", "Boo", "Boomerang", "Bourne shell (including bash and ksh)", "BREW", "BPEL", "B", "C--", "C++ – ISO/IEC 14882", "C# – ISO/IEC 23270", "C/AL", "Caché ObjectScript", "C Shell", "Caml", "Cayenne", "CDuce", "Cecil", "Cesil", "Céu", "Ceylon", "CFEngine", "CFML", "Cg", "Ch", "Chapel", "Charity", "Charm", "Chef", "CHILL", "CHIP-8", "chomski", "ChucK", "CICS", "Cilk", "Citrine (programming language)", "CL (IBM)", "Claire", "Clarion", "Clean", "Clipper", "CLIPS", "CLIST", "Clojure", "CLU", "CMS-2", "COBOL – ISO/IEC 1989", "CobolScript – COBOL Scripting language", "Cobra", "CODE", "CoffeeScript", "ColdFusion", "COMAL", "Combined Programming Language (CPL)", "COMIT", "Common Intermediate Language (CIL)", "Common Lisp (also known as CL)", "COMPASS", "Component Pascal", "Constraint Handling Rules (CHR)", "COMTRAN", "Converge", "Cool", "Coq", "Coral 66", "Corn", "CorVision", "COWSEL", "CPL", "CPL", "Cryptol", "csh", "Csound", "CSP", "CUDA", "Curl", "Curry", "Cybil", "Cyclone", "Cython", "Java", "Javascript", "M2001", "M4", "M#", "Machine code", "MAD (Michigan Algorithm Decoder)", "MAD/I", "Magik", "Magma", "make", "Maple", "MAPPER now part of BIS", "MARK-IV now VISION:BUILDER", "Mary", "MASM Microsoft Assembly x86", "MATH-MATIC", "Mathematica", "MATLAB", "Maxima (see also Macsyma)", "Max (Max Msp – Graphical Programming Environment)", "Maya (MEL)", "MDL", "Mercury", "Mesa", "Metafont", "Microcode", "MicroScript", "MIIS", "Milk (programming language)", "MIMIC", "Mirah", "Miranda", "MIVA Script", "ML", "Model 204", "Modelica", "Modula", "Modula-2", "Modula-3", "Mohol", "MOO", "Mortran", "Mouse", "MPD", "Mathcad", "MSIL – deprecated name for CIL", "MSL", "MUMPS", "Mystic Programming L"]


    tags: string[] = ['JavaScript', 'React'];

    tagifySettings: TagifySettings = {
        duplicates: false,
        maxTags: 10,
        enforceWhitelist: false,
        blacklist: ['php', 'jquery'],
    };

    customDropdownSettings: TagifySettings = {
        whitelist: this.whitelist,
        maxTags: 10,
        dropdown: {
            maxItems: 20,
            classname: 'tags-look',
            enabled: 0,
            closeOnSelect: false
        }
    }

    customEmailSettings: TagifySettings = {
        editTags: {keepInvalid: false},
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        whitelist: Array.from({length: 20}, () => `user${Math.floor(Math.random() * 1000)}@mail.com`),
        dropdown: {
            position: 'text',
            enabled: 1
        }
    }

    tagOutsideSettings: TagifySettings = {
        whitelist: ['alpha', 'beta'],
        focusable: false,
        dropdown: {
            position: 'input',
            enabled: 0
        }
    }


    removeAllTags() {
        const tagify = this.tagifyService.get('tags-remove-all');
        if (tagify) {
            tagify.removeAllTags();
            this.tags = [];
        }
    }

}
