const MusikaContract = artifacts.require("MusikaContract");
const DonationContract = artifacts.require("DonationContract");

module.exports = function(deployer) {
  deployer.deploy(MusikaContract);
  deployer.deploy(DonationContract);
};
