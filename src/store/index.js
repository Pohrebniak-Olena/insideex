import { popScopeId } from "vue";
import Vuex from "vuex";
export default new Vuex.Store({
    state:{
        popUpTradingBalance: false,
        popUpWithdraw:false,
        popUpQR: false,
        showHideNavbar:false,
        showSideBar:false,
    },
    mutations:{
        setPopUpTradingBalance(state, data){
            state.popUpTradingBalance = data;
        },
        setShowHideNavbar(state, data){
            state.showHideNavbar = data;
        },
        setPopUpWithdraw(state, data){
            state.popUpWithdraw = data;
        },
        setPopUpQR(state, data){
            state.popUpQR = data;
        },
        setShowSideBar(state, data){
            state.showSideBar = data;
        }
    }
})