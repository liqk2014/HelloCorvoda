package io.cordova.hellocordova;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by Administrator on 2016/1/27.
 */
public class ToastPlugin extends CordovaPlugin{


    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    	        Toast.makeText(cordova.getActivity(),"hello",Toast.LENGTH_LONG).show();


int b =0;
    	
        return super.execute(action, args, callbackContext);
    }



}
