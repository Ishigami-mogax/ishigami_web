export const styles = {
    mainContainer:{
        display:'grid',
        gridTemplateColumns:"repeat(2, auto 1fr)",
        rowGap:1,
        columnGap:1,
        width:'fit-content',
        marginBottom:1
    },
    imageContainer:{
        gridColumn:1,
        gridRow: 1,
        display:'flex',
        justifyContent:'center'
    },
    imageStyle:{
        width: "50px",
        height:"50px"
    },
    nameContainer:{
        gridColumn:2,
        gridRow: 1,
        display:'flex',
        alignItems:'center'
    },
    nameStyle:{
        fontSize:18,
        fontWeight:'700'
    },
    barContainer:{
        gridColumn:1,
        gridRow: 2,
        display:'flex',
        justifyContent:'center'
    },
    barStyle:{
        width:2,
        height:60
    }
}
