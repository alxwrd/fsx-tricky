
declare module 'node-simconnect' {
    export function open(
        appName: string,
        success: Function,
        exited: Function,
        execption: Function,
        error: Function
    ): boolean;

    enum objectId {
        USER=0
    }

    enum dataRequestFlag {
        DEFAULT=0,
        CHANGED,
        TAGGED
    }

    enum datatype {
        INVALID=0,
        INT32,
        INT64,
        FLOAT32,
        FLOAT64,
        STRING8,
        STRING32,
        STRING64,
        STRING128,
        STRING256,
        STRING260,
        STRINGV,
    }

    enum simobjectType {
        USER=0,
        ALL,
        AIRCRAFT,
        HELICOPTER,
        BOAT,
        GROUND,
    }

    enum period {
        NEVER=0,
        ONCE,
        VISUAL_FRAME,
        SIM_FRAME,
        SECOND,
    }
}

