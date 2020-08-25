#include <cstdint>
#include <cstdlib>
#include <cstring>
#include <iostream>
#include <string>
#include <vector>

#include "DataProcessingAsyncWorker.h"
#include "QrCode.h"

DataProcessingAsyncWorker::DataProcessingAsyncWorker(napi_env env, std::string data, int border, int type, int ecl, int minVersion, int maxVersion, int mask, bool boostEcl, std::string color, std::string background, Napi::Promise::Deferred &deferred) : Napi::AsyncWorker(env), data(data), border(border), type(type), ecl(ecl), minVersion(minVersion), maxVersion(maxVersion), mask(mask), boostEcl(boostEcl), color(color), background(background), result(), deferred(deferred)
{
}

void DataProcessingAsyncWorker::Execute()
{
    QrCode::Type enumType = static_cast<QrCode::Type>(type);
    QrCode::Ecc enumEcl = static_cast<QrCode::Ecc>(ecl);
    std::vector<QrSegment> segs0 = QrSegment::makeSegments(data.c_str());
    QrCode qrcode = QrCode::encodeSegments(segs0, enumEcl, minVersion, maxVersion, mask, boostEcl);
    result = qrcode.toSvgString(border, enumType, color, background);
}

void DataProcessingAsyncWorker::OnOK()
{
    deferred.Resolve(String::New(Env(), result));
}

void DataProcessingAsyncWorker::OnError(const Napi::Error &error)
{
    deferred.Reject(error.Value());
}