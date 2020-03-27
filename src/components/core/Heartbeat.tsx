import React, { useEffect } from 'react';
import ServerApi from '../../assets/js/service';

export const Heartbeat = () => {
    useEffect(() => {
        const payload = { route: window.location.href, message: '' };
        const hello = { ...payload, message: 'step in' };
        const bye = { ...payload, message: 'step out' };
        function sayHello() {
            ServerApi.sendHeartbeat('server/heartbeat/beep', hello);
        }
        function sayBye() {
            ServerApi.sendHeartbeat('server/heartbeat/beep', bye);
        }
        sayHello();
        window.onbeforeunload = sayBye;
    }, []);

    return <></>;
};
