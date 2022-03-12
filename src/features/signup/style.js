import { makeStyles } from '@mui/styles';

const customStyle = makeStyles({
    auth_head: {"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"bold","fontSize":"28px","lineHeight":"42px","color":"#1A202C",justifyContent:"center"},
    forget_pass_text: {"fontFamily":"Poppins","fontStyle":"normal","fontWeight":"normal","fontSize":"12px","lineHeight":"27px","color":"#2C5282"},
    authform: {top:"40px"},
    login_btn:{
        background: "#3F51B5",
        borderRadius: "5px",
        width:"20rem",
        height:"50px",
    },
    centerBox: {
        justifyContent: "center",
        alignItems: "center"
      },
});

export default customStyle;