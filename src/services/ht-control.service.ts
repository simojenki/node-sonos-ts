// Automatically generated by service-generator.js, don't change!
import BaseService from './base-service';

export class HTControlService extends BaseService<HTControlServiceEvent> {
  readonly serviceNane: string = 'HTControl';

  readonly controlUrl: string = '/HTControl/Control';

  readonly eventSubUrl: string = '/HTControl/Event';

  readonly scpUrl: string = '/xml/HTControl1.xml';

  // #region methods
  async CommitLearnedIRCodes(input: { Name: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('CommitLearnedIRCodes', input); }

  async GetIRRepeaterState():
  Promise<GetIRRepeaterStateResponse> { return await this.SoapRequest<GetIRRepeaterStateResponse>('GetIRRepeaterState'); }

  async GetLEDFeedbackState():
  Promise<GetLEDFeedbackStateResponse> { return await this.SoapRequest<GetLEDFeedbackStateResponse>('GetLEDFeedbackState'); }

  async IdentifyIRRemote(input: { Timeout: number }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('IdentifyIRRemote', input); }

  async IsRemoteConfigured():
  Promise<IsRemoteConfiguredResponse> { return await this.SoapRequest<IsRemoteConfiguredResponse>('IsRemoteConfigured'); }

  async LearnIRCode(input: { IRCode: string; Timeout: number }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('LearnIRCode', input); }

  async SetIRRepeaterState(input: { DesiredIRRepeaterState: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetIRRepeaterState', input); }

  async SetLEDFeedbackState(input: { LEDFeedbackState: string }):
  Promise<boolean> { return await this.SoapRequestWithBodyNoResponse<typeof input>('SetLEDFeedbackState', input); }
  // #endregion

  // Event properties from service description.
  protected eventProperties(): {[key: string]: string} {
    return {
      IRRepeaterState: 'string',
      LEDFeedbackState: 'string',
      RemoteConfigured: 'boolean',
      TOSLinkConnected: 'boolean',
    };
  }
}

// Generated responses
export interface GetIRRepeaterStateResponse {
  CurrentIRRepeaterState: string;
}

export interface GetLEDFeedbackStateResponse {
  LEDFeedbackState: string;
}

export interface IsRemoteConfiguredResponse {
  RemoteConfigured: boolean;
}

// Strong type event
export interface HTControlServiceEvent {
  IRRepeaterState?: string;
  LEDFeedbackState?: string;
  RemoteConfigured?: boolean;
  TOSLinkConnected?: boolean;
}
