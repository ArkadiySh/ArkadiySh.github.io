function vlidation() {
    var numberfield = 2;
    var allert = false;
    var messages = [];

    //--------------------------------------------------------------------
    var patt = /[а-яА-Я]/g;
    var name = $('#Name_step_two').val();
    if (!patt.test(name)) {
        messages[messages.length] = 'Поле Ім\'я приймає тільки кирилицю';
    }
    //--------------------------------------------------------------------

    for (var i = 0; i < numberfield; i++) {
        var string = document.getElementsByClassName('fields')[i].value;
        if (string.length != 0) {
            if (!checkfield(document.getElementsByClassName('fields')[i])) {
                document.getElementsByClassName('fields')[i].classList.add('error');
                allert = true;
            } else {
                document.getElementsByClassName('fields')[i].classList.remove('error');                
            }
            //-------------------------------------------------------------------
            var fields = document.getElementsByClassName('fields')[i];
            var attr_val = $(fields).attr('id');
            if (attr_val == 'tel_number') {
                var tel_number = $('#tel_number').val();
                tel_number = tel_number.substring(4, tel_number.length);
                if(tel_number.length < 7)
                {
                    messages[messages.length] = 'Формат номера +380631112233';
                    allert = true;
                }
            }
            //-------------------------------------------------------------------
        } else {
            document.getElementsByClassName('fields')[i].classList.add('error');

            var fields = document.getElementsByClassName('fields')[i];
            var name_attr = $(fields).attr('data-name-of-field');
            messages[messages.length] = 'Полe ' + name_attr + ' обов\'язкове';
            allert = true;
        }
    }
    if (allert) {
        $('#ClientMessage').text('');
        for (var i = 0; i < messages.length; ++i) {
            $('#ClientMessage').append('<div style="color:#ff0000;">' + messages[i] + '</div>');
        }
        return false;
    } else {
        $('#RequestCardForm').submit();
        return true;
    }
    function checkfield(val) {
        var regulations = {
            Name_step_two: {
                step_0: /[А-яЁёІіЇї]/,
                numb_symbol_min_0: 1,
                numb_symbol_max_0: 0,
                action_step_0: true,

                step_1: /[\s]/,
                numb_symbol_min_1: 0,
                numb_symbol_max_1: 0,
                action_step_1: true,

                step_2: /[А-яЁёІіЇї]/,
                numb_symbol_min_2: 0,
                numb_symbol_max_2: 0,
                action_step_2: true,

                step_3: /[\s]/,
                numb_symbol_min_3: 0,
                numb_symbol_max_3: 0,
                action_step_3: true,

                step_4: /[А-яЁёІіЇї]/,
                numb_symbol_min_4: 0,
                numb_symbol_max_4: 0,
                action_step_4: true
            },
            tel_number: {
                step_0: /[+]/,
                numb_symbol_min_0: 0,
                numb_symbol_max_0: 1,
                action_step_0: true,

                step_1: /[0-9]/,
                numb_symbol_min_1: 10,
                numb_symbol_max_1: 12,
                action_step_1: true
            }
        };
        var vall = val;
        var step = 0;
        var symbol = 0;
        for (var i = 0; i < vall.value.length; i++) {
            //console.log('S'+symbol);
            //console.log('i'+i);
            if (regulations[vall.id]['action_step_' + step]) {
                if (!regulations[vall.id]['step_' + step].test(vall.value[i])) {
                    symbol--;
                    if (minvalue()) {
                        i--;
                        symbol = 0;
                        step++;
                    } else {
                        return false;
                    }
                } else if (regulations[vall.id]['step_' + step].test(vall.value[i])) {
                    if (maxvalue()) {
                        if (vall.value[i + 1]) {
                            symbol++;
                        } else {
                            if (minvalue()) {
                                //////////////////////////////////поместить в функцию
                                var stepplus = step;
                                while (regulations[vall.id]['action_step_' + (+stepplus + 1)]) {
                                    if (regulations[vall.id]['numb_symbol_min_' + (+stepplus + 1)] != 0) {
                                        return false;
                                    } else {
                                        stepplus++;
                                    }
                                }
                                ///////////////////////////////поместить в функцию
                                return true;
                            } else {
                                return false;
                            }
                        }
                    } else {
                        if (vall.value[i + 1]) {
                            symbol = 0;
                            step++;
                        } else {
                            if (minvalue()) {
                                //////////////////////////////////поместить в функцию
                                var stepplus = step;
                                while (regulations[vall.id]['action_step_' + (+stepplus + 1)]) {
                                    if (regulations[vall.id]['numb_symbol_min_' + (+stepplus + 1)] != 0) {
                                        return false;
                                    } else {
                                        stepplus++;
                                    }
                                }
                                //////////////////////////////////поместить в функцию
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }
                }
            } else {
                return false;
            }
        }
        function minvalue() {
            if (regulations[vall.id]['numb_symbol_min_' + step] == 0) {
                return true;
            } else if (regulations[vall.id]['numb_symbol_min_' + step] <= symbol + 1) {
                return true;
            } else {
                return false;
            }
        }
        function maxvalue() {
            if (regulations[vall.id]['numb_symbol_max_' + step] == 0) {
                return true;
            } else if (regulations[vall.id]['numb_symbol_max_' + step] > symbol + 1) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }
}
