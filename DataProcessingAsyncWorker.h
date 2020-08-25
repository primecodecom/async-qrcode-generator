#include <napi.h>

using namespace Napi;

class DataProcessingAsyncWorker : public AsyncWorker
{
public:
    DataProcessingAsyncWorker(napi_env env, std::string data, int border, int type, int ecl, int minVersion, int maxVersion, int mask, bool boostEcl, std::string color, std::string background, Napi::Promise::Deferred &deferred);
    void Execute();
    void OnOK();
    void OnError(const Napi::Error &e);

private:
    std::string data;
    int border;
    int type;
    int ecl;
    int minVersion;
    int maxVersion;
    int mask;
    bool boostEcl;
    std::string color;
    std::string background;

    std::string result;
    Napi::Promise::Deferred deferred;
};