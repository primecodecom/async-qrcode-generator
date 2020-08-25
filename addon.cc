#include <napi.h>
#include "DataProcessingAsyncWorker.h"

using namespace Napi;

Napi::Promise Generate(const CallbackInfo &info)
{

    Napi::Env env = info.Env();
    Napi::Promise::Deferred deferred = Napi::Promise::Deferred::New(info.Env());

    if (info.Length() != 10 || !info[0].IsString() || !info[1].IsNumber()  || !info[2].IsNumber() || !info[3].IsNumber() || !info[4].IsNumber() || !info[5].IsNumber() || !info[6].IsNumber() || !info[7].IsBoolean() || !info[8].IsString() || !info[9].IsString())
    {
        deferred.Reject(Napi::Error::New(env, "Invalid arguments").Value());
    }
    else
    {
        std::string data = info[0].As<Napi::String>();
        int border = info[1].As<Napi::Number>();
        int type = info[2].As<Napi::Number>();
        int ecl = info[3].As<Napi::Number>();
        int minVersion = info[4].As<Napi::Number>();
        int maxVersion = info[5].As<Napi::Number>();
        int mask = info[6].As<Napi::Number>();
        bool boostEcl = info[7].As<Napi::Boolean>();
        std::string color = info[8].As<Napi::String>();
        std::string background = info[9].As<Napi::String>();

        DataProcessingAsyncWorker *worker = new DataProcessingAsyncWorker(env, data, border, type, ecl, minVersion, maxVersion, mask, boostEcl, color, background, deferred);
        worker->Queue();
    }

    return deferred.Promise();
}

Object Init(Env env, Object exports)
{
    exports.Set(String::New(env, "generate"), Function::New(env, Generate));
    return exports;
}

NODE_API_MODULE(NODE_GYP_MODULE_NAME, Init)