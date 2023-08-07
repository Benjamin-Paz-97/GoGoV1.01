import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../Theme.js'
const styles = StyleSheet.create({
    containerInicioSesion: {
        backgroundColor: "#1E1B33",
        flex: 1,

    },
    main: {
        flex: 1,        
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    Titulo:{
        fontSize: theme.TamFuente.Titulo,
        textAlign: "left",
        paddingStart: 25,
        fontWeight: theme.fontWeigths.bold,
        color: "#F0F0F0",
    },
    SubTitulo:{
        fontSize: theme.TamFuente.subtitulo,
        textAlign: "left",
        paddingStart: 25,
        color: "#F0F0F0",
        paddingTop : 20
    },
    comentario:{
        fontSize: theme.TamFuente.comentario,
        textAlign: "left",
        paddingStart: 25,
        color: "#F0F0F0",
    },
    comentarioSinPadding:{
        fontSize: theme.TamFuente.comentario,
        textAlign: "left",
        color: "#F0F0F0",
    },
    comentarioNegrita:{
        fontSize: theme.TamFuente.comentario,
        textAlign: "left",
        color: "#F0F0F0",
        fontWeight: theme.fontWeigths.bold,
    },
    Img: {
        marginTop: 5,
        alignItems: "left",
        width: '100%',
        height: 300,
        alignItems: "center",
    },
    ingresoNombre: {

        color: '#F0F0F0',
        marginBottom: 10,
        width: 250,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        paddingStart: 25
    },
    Input:{
        backgroundColor: '#312E44',
        marginBottom: 10,
        width: 200,
        height: 40,
        margin: 14,
        borderWidth: 1,
        alignContent:'center',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1,
    },
    TextEnCaja:{
        color:'#FFFFFF',
        fontSize:14,        
    }
});

export default styles