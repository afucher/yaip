/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

grammar IniFileGrammar;


ini : (LINE_COMMENT | section)* EOF;

section : section_header key_values;

section_header : LBRACK section_header_title RBRACK;

section_header_title : text;

key_values : key_value*;

key_value : key EQUALS value?;
               
key : text;

value : text;





text :TEXT;
TEXT: ( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' | '/' | '\\' | ':' | '*' | '.' | ',' | '@' | ' ')+;
        //( 'a' .. 'z' | 'A' .. 'Z' | '_' | '0' .. '9' | '/'| '\\' | ':')* ;

//TEXT : ( ~('='|'\n') )*;

EQUALS	: '=';

LBRACK	: '['  ;

RBRACK	: ']'  ;

LINE_COMMENT : ';' ~('\n'|'\r')*  ->  channel(HIDDEN);

WS  :   (('\r')? '\n' |  ' ' | '\t')+  -> skip;