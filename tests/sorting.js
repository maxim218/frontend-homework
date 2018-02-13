'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4},
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
		];
		const actual = sorting(initial, ['prop1']);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'},
		];
		const actual = sorting(initial, ['id', 'prop1']);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'},
		];

		assert.deepEqual(actual, expected);
	});

    QUnit.test('sorting сортируем по трём полям', function (assert) {
        const initial = [
            {a: 7, b: 'aa', c: 4},
            {a: 8, b: 'ff', c: 3},
            {a: 6, b: 'xx', c: 1},
            {a: 2, b: 'rr', c: 2},
        ];
        const actual = sorting(initial, ['a', 'b', 'c']);

        const expected = [
            {a: 2, b: 'rr', c: 2},
            {a: 6, b: 'xx', c: 1},
            {a: 7, b: 'aa', c: 4},
            {a: 8, b: 'ff', c: 3},
        ];

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting не получает параметров', function (assert) {
        const actual = sorting();
        const expected = null;

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting получает только один параметр', function (assert) {
        const initial = [
            {x: 73, y: '12'},
            {x: 25, y: '89'},
        ];
        const actual = sorting(initial);
        const expected = null;

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting получает более двух параметров', function (assert) {
        const initial = [
            {aaa: 12, bbbb: 'aa88', cccc: 498},
            {aaa: 56, bbbb: 'ff99', cccc: 378},
        ];

        const actual = sorting(initial, ['aaa', 'cccc', 'bbbb'], 218);
        const expected = null;

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting получает параметр не того типа', function (assert) {
        const initial = {
        	nickname: "Maxim",
			age: 45
		};

        const actual = sorting(initial, ['x', 'y']);
        const expected = null;

        assert.deepEqual(actual, expected);
    });

    QUnit.test('sorting сортировка русских букв', function (assert) {
        const initial = [
            {prop1: 'з'},
            {prop1: 'я'},
            {prop1: 'б'},
            {prop1: 'ё'},
            {prop1: 'ф'},
        ];
        const actual = sorting(initial, ['prop1']);

        const expected = [
            {prop1: 'б'},
            {prop1: 'ё'},
            {prop1: 'з'},
            {prop1: 'ф'},
            {prop1: 'я'},
        ];

        assert.deepEqual(actual, expected);
    });

});
