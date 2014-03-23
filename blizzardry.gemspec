# encoding: utf-8

lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

require 'blizzardry/version'

Gem::Specification.new do |spec|
  spec.name          = 'blizzardry'
  spec.version       = Blizzardry::VERSION
  spec.authors       = ['Tim Kurvers']
  spec.email         = ['tim@moonsphere.net']
  spec.summary       = 'Blizzard is awesome, but working with their game files requires some wizardry. Blizzardry handles various formats, straight from Ruby'
  spec.description   = spec.summary
  spec.homepage      = 'https://github.com/timkurvers/blizzardry'
  spec.license       = 'MIT'

  spec.files         = `git ls-files -z`.split("\x0")
  spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  spec.require_paths = ['lib']

  spec.add_development_dependency 'bundler', '~> 1.5'
  spec.add_development_dependency 'rake'
end
