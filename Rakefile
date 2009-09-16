require "spec/rake/spectask"

Spec::Rake::SpecTask.new(:spec) do |spec|
  spec.libs << 'spec'
  spec.spec_files = FileList['spec/**/*_spec.rb']
end

task :default => :spec
